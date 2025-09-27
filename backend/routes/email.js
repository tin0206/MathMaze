const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()
const crypto = require('crypto')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        return res.status(404).json({ message: 'Email not found' })
    }

    const resetToken = crypto.randomBytes(32).toString('hex')
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    const expiry = new Date(Date.now() + 3600 * 1000)

    await prisma.user.update({
        where: { email },
        data: {
            resetToken: hashedToken,
            resetTokenExpiry: expiry
        }
    })

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${email}`

    const mailOptions = {
        from: `"MathMaze" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Password Reset',
        html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password. The link expires in 1 hour.</p>`
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: 'Password reset email sent' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error sending email', error })
    }
})

module.exports = router