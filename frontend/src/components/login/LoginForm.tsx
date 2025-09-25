"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/store/useUser";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useUser()
    const router = useRouter()

    const checkValidity = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.")
            return false
        }
        return true
    }

    const handleSubmit = async () => {
        setError("")
        setIsLoading(true)
        if (!checkValidity()) return
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.message === "Email not found" || data.message === "Incorrect password") {
                setError(data.message)
            } else {
                setUser({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    role: data.role
                })
                console.log(data.accessToken)
                console.log(data.refreshToken)
                localStorage.setItem("accessToken", data.accessToken)
                localStorage.setItem("refreshToken", data.refreshToken)
            }
        })
        .catch(err => {
            setError("An error occurred. Please try again.")
        })

        setTimeout(() => {
            setEmail("")
            setPassword("")
            setIsLoading(false)
            if (!error) {
                router.push("/")
            }
        }, 2000)
    }

    return (
        <div className="bg-white w-full justify-center p-[30px] md:p-[40px] lg:p-[50px] flex flex-col gap-y-[30px] md:gap-y-[40px] lg:gap-y-[50px] rounded-[10px]">
            <div className="flex flex-col justify-center items-center gap-y-[10px]">
                <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-semibold">Login</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
                    Welcome back! Please log in to access your account.
                </p>
            </div>
            <div className="flex flex-col gap-y-[20px] md:gap-y-[24px] lg:gap-y-[30px] relative">
                <div className="flex flex-col gap-y-[15px]">
                    <label htmlFor="email" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Email</label>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <label htmlFor="password" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Password</label>
                    <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your Password" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <div className="w-full flex justify-end">
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a] hover:underline cursor-pointer">
                            Forgot Password?
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Checkbox checked={rememberMe} onCheckedChange={(checked) => setRememberMe(!!checked)} className="size-6 lg:size-[30px] cursor-pointer" id="terms" />
                        <label htmlFor="terms" className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Remember me</label>
                    </div>
                    <Button 
                        variant="outline" className="w-full h-[49px] lg:h-[63px] bg-[rgba(255,149,0,1)] text-white px-[20px] py-[14px] lg:py-[18px] cursor-pointer hover:text-white hover:bg-[rgba(255,149,0,0.8)]"
                        disabled={isLoading || !email || !password}
                        onClick={handleSubmit}
                    >
                        <span className="text-[13px] md:text-[16px] lg:text-[18px] font-medium">
                            Login
                        </span>
                    </Button>
                    {
                        error && <p className="text-red-500 text-[14px] md:text-[16px] lg:text-[18px]">{error}</p>
                    }
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <hr className="w-2/3" />
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">OR</p>
                    <hr className="w-2/3" />
                </div>
                <Button variant={"outline"} className="w-full h-[49px] lg:h-[63px]px-[20px] py-[14px] lg:py-[18px] cursor-pointer bg-[#f7f7f8] hover:bg-[rgba(241,241,243,1)]">
                    <div className="flex items-center justify-center gap-x-3">
                        <img src="/google.png" alt="Google Icon" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]" />
                        <span className="text-[13px] md:text-[16px] lg:text-[18px] font-medium">
                            Login with Google
                        </span>
                    </div>
                </Button>
                <div className="flex items-center justify-center gap-x-1">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Already have an account?</p>
                    <div className="flex items-center">
                        <Button variant={"link"} className="w-[70px] cursor-pointer text-[14px] md:text-[16px] lg:text-[18px] hover:underline">
                            <Link href="/signup">Sign Up</Link>
                        </Button>
                        <MoveUpRight size={16} className="text-[#59595a]" />
                    </div>
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
