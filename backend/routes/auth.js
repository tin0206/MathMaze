const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('../generated/prisma')
const { OAuth2Client } = require('google-auth-library')

const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
)

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_secret"
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh_secret"

const db = require('../db')

// Signup route
router.post('/signup', async (req, res) => {
    const { name, email, password, role } = req.body
    
    let roleNormalized
    if (role == "student") {
        roleNormalized = "STUDENT"
    } else if (role == "teacher") {
        roleNormalized = "TEACHER"
    } else {
        roleNormalized = "ADMIN"
    }
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: roleNormalized
            }
        })

        res.status(201).json({ message: "User created", userId: user.id })

    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ message: "Email already exists" })
        }
        res.status(500).json({ message: "Server error" })
    }
})

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        })
        if (!user) {
            return res.status(400).json({ message: "Email not found" })
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(400).json({ message: "Incorrect password" })
        }

        const accessToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role }, 
            ACCESS_TOKEN_SECRET, 
            { expiresIn: '1h' }
        )

        const newRefreshToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role }, 
            REFRESH_TOKEN_SECRET, 
            { expiresIn: '7d' }
        )

        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: newRefreshToken }
        })
        
        res.status(200).json({ 
            message: "Login successful", 
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            accessToken: accessToken,
            refreshToken: newRefreshToken
        })
    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
})

// Google login route
router.post('/google', async (req, res) => {
    const { token: code } = req.body

    try {
        const { tokens } = await client.getToken(code)

        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })

        const payload = ticket.getPayload()
        const { sub, email, name } = payload

        let user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: sub,
                    role: "STUDENT"
                }
            })
        }

        const accessToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role }, 
            ACCESS_TOKEN_SECRET, 
            { expiresIn: '1h' }
        )

        const newRefreshToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role }, 
            REFRESH_TOKEN_SECRET, 
            { expiresIn: '7d' }
        )

        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: newRefreshToken }
        })

        res.status(200).json({ 
            message: "Login successful", 
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            accessToken: accessToken,
            refreshToken: newRefreshToken
        })

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
})

/// Logout route
router.post('/logout', async (req, res) => {
    const { refreshToken } = req.body 

    try {
        await prisma.user.updateMany({
            where: { refreshToken },
            data: { refreshToken: null }
        })
        res.status(200).json({ message: "Logout successful" })
    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
})

// Get current user route
router.get('/me', async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }

    try {
        const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET)
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, name: true, email: true, role: true }
        })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ 
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
         })
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token expired" })
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" })
        }
        return res.status(500).json({ message: "Server error" })
    }
})

// Token refresh route
router.post('/refresh', async (req, res) => {
    const { refreshToken } = req.body

    try {
        const user = await prisma.user.findFirst({
            where: { refreshToken }
        })

        if (!user) {
            return res.status(403).json({ message: "Invalid refresh token" })
        }
        
        jwt.verify(refreshToken, REFRESH_TOKEN_SECRET)

        const accessToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
        )

        const newRefreshToken = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        )

        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: newRefreshToken }
        })

        return res.status(200).json({
            accessToken: accessToken,
            refreshToken: newRefreshToken
        })

    } catch (error) {
        return res.status(403).json({ message: "Expired or invalid refresh token" })
    }
})

module.exports = router