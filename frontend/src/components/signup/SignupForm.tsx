"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState<"student" | "teacher">("student")
    const [agreeTerms, setAgreeTerms] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const checkValidity = () => {
        if (name.length < 2) {
            setError("Name must be at least 2 characters long.")
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
        return true
    }

    const handleSubmit = async () => {
        setError("")
        setIsLoading(true)
        if (!checkValidity()) return
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password,
                "role": role
            })
        })

        setTimeout(() => {
            setName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setRole("student")
            setAgreeTerms(false)
            setIsLoading(false)
            router.push("/login")
        }, 2000)
    }

    return (
        <div className="bg-white w-full justify-center p-[30px] md:p-[40px] lg:p-[50px] flex flex-col gap-y-[30px] md:gap-y-[40px] lg:gap-y-[50px] rounded-[10px]">
            <div className="flex flex-col justify-center items-center gap-y-[10px]">
                <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-semibold">Sign Up</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
                    Create an account to unlock exclusive features.
                </p>
            </div>
            <div className="flex flex-col gap-y-[20px] md:gap-y-[24px] lg:gap-y-[30px] relative">
                <div className="flex flex-col gap-y-[15px]">
                    <label htmlFor="name" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Full Name</label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your Name" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <label htmlFor="email" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Email</label>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <label htmlFor="password" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Password</label>
                    <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your Password" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <label htmlFor="confirmPassword" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Confirm Password</label>
                    <Input id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm your Password" className="w-full h-[61px] md:h-[64px] lg:h-[75px] p-5 lg:p-6 rounded-[10px] border border-[#d1d1d1] focus:border-[#4a90e2] focus:ring-0 text-[14px] md:text-[16px] lg:text-[18px]" />
                    <label htmlFor="role" className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Roles</label>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-x-2">
                            <Checkbox className="cursor-pointer" id="student" checked={role == "student"} onCheckedChange={() => {setRole("student")}} />
                            <label htmlFor="student" className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Student</label>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Checkbox className="cursor-pointer" id="teacher" checked={role === "teacher"} onCheckedChange={() => {setRole("teacher")}} />
                            <label htmlFor="teacher" className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Teacher</label>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Checkbox checked={agreeTerms} onCheckedChange={(checked) => setAgreeTerms(!!checked)} className="cursor-pointer" id="terms" />
                        <label htmlFor="terms" className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">I agree to the <span className="underline cursor-pointer">Terms and Conditions</span></label>
                    </div>
                    <Button 
                        variant="outline" className="w-full h-[49px] lg:h-[63px] bg-[rgba(255,149,0,1)] text-white px-[20px] py-[14px] lg:py-[18px] cursor-pointer hover:text-white hover:bg-[rgba(255,149,0,0.8)]"
                        disabled={isLoading || !agreeTerms || !name || !email || !password || password !== confirmPassword}
                        onClick={handleSubmit}
                    >
                        <span className="text-[13px] md:text-[16px] lg:text-[18px] font-medium">
                            Sign Up
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
                            Sign Up with Google
                        </span>
                    </div>
                </Button>
                <div className="flex items-center justify-center gap-x-1">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Already have an account?</p>
                    <div className="flex items-center">
                        <Button variant={"link"} className="w-[60px] cursor-pointer text-[14px] md:text-[16px] lg:text-[18px] hover:underline">
                            <Link href="/login">Login</Link>
                        </Button>
                        <MoveUpRight size={16} className="text-[#59595a]" />
                    </div>
                </div>
                {
                    isLoading && 
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70 backdrop-blur-sm rounded-[10px] flex items-center justify-center">
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Loading...</p>
                    </div>
                }
            </div>
        </div>
    )
}
