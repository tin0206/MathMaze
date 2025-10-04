"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/store/useNotificationStore";

type ResetPasswordFormProps = {
    token: string | null
    email: string | null
}

export default function ResetPasswordForm({ token, email }: ResetPasswordFormProps) {
    const [submitEmail, setSubmitEmail] = useState(email || "")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { setNotification } = useNotificationStore()
    const router = useRouter()

    const checkValidity = () => {
        if (!email) {
            setError("Email is required.")
            return false
        }

        if (submitEmail !== email) {
            setError("Email does not match the one associated with the reset token.")
            return false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.")
            return false
        }

        const passwordRegex = /^[A-Za-z0-9]+$/
        if (!passwordRegex.test(password)) {
            setError("Password can only contain letters and numbers.")
            return false
        }
        if (password.length > 20) {
            setError("Password must be less than 20 characters long.")
            return false
        }

        return true
    }

    const handleSubmit = async () => {
        setError("")
        setIsLoading(true)
        if (!checkValidity()) return

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "token": token
            })
        })
        if (result.ok) {
            setNotification({
                id: Date.now(),
                type: "success",
                title: "Password Reset Successful",
                message: "Your password has been reset successfully. Please log in with your new password.",
            })
            setTimeout(() => {
                router.push("/login")
            }, 1000)
        }
        else {
            const data = await result.json()
            setError(data.message)
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }

    return (
        <div className="bg-white w-full justify-center p-[30px] md:p-[40px] lg:p-[50px] flex flex-col gap-y-[30px] md:gap-y-[40px] lg:gap-y-[50px] rounded-[10px]">
            <div className="flex flex-col justify-center items-center gap-y-[10px]">
                <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-semibold">Reset Password</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
                    Please enter your email address to reset your password.
                </p>
            </div>
            <div className="flex flex-col gap-y-[20px] md:gap-y-[24px] lg:gap-y-[30px] relative">
                <div className="flex flex-col gap-y-[18px]">
                    <label htmlFor="email" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Email</label>
                    <Input id="email" value={submitEmail} onChange={(e) => setSubmitEmail(e.target.value)} type="email" placeholder="Enter your Email" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <label htmlFor="password" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">New Password</label>
                    <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your new Password" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <label htmlFor="password" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Confirm Password</label>
                    <Input id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm your new Password" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    {
                        error && <p className="text-red-500 text-[14px] md:text-[16px] lg:text-[18px]">{error}</p>
                    }
                    <Button 
                        variant="outline" className="w-full h-[49px] lg:h-[63px] bg-[rgba(255,149,0,1)] text-white px-[20px] py-[14px] lg:py-[18px] cursor-pointer hover:text-white hover:bg-[rgba(255,149,0,0.8)]"
                        disabled={isLoading || !email || !password || !confirmPassword || password !== confirmPassword}
                        onClick={handleSubmit}
                    >
                        <span className="text-[13px] md:text-[16px] lg:text-[18px] font-medium">
                            Reset Password
                        </span>
                    </Button>
                </div>
                {
                    isLoading && 
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.6)] flex justify-center items-center rounded-[10px]">
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Loading...</p>
                    </div>
                }
            </div>
        </div>
    )
}
