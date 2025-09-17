"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from 'next/link'

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex flex-col px-[20px] lg:px-[90px] xl:px-[132px] bg-[rgba(247,247,248,1)]">
      <div className="hidden md:block">
        <div className="flex items-center justify-between h-[99px] max-w-[1860px] border-[#f1f1f3] border-b-2 bg-[rgba(247,247,248,0.2)] rounded-[10px]">
          <div className="flex md:h-[45px] lg:h-[55px] md:gap-x-[20px] lg:gap-x-[50px] items-center">
            <Link href="/" className="cursor-pointer size-[60px] flex items-center justify-center bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] rounded-[8px]">
              <img src="/icon.png" alt="Logo" className="size-[40px]" />
            </Link>
            <ul className="flex items-center gap-x-4 md:h-[45px] lg:h-[55px]">
              <Link href="/" className="h-full flex items-center justify-center md:w-[100px] lg:w-[100px] md:text-[20px] lg:text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]">
                Home
              </Link>
              <Link href="/courses" className="h-full flex items-center justify-center md:w-[100px] lg:w-[100px] md:text-[20px] lg:text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]">
                Courses
              </Link>
              <Link href="/about" className="h-full flex items-center justify-center md:w-[100px] lg:w-[100px] md:text-[20px] lg:text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]">
                About Us
              </Link>
              <Link href="/contact" className="h-full flex items-center justify-center md:w-[100px] lg:w-[100px] md:text-[20px] lg:text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]">
                Contact
              </Link>
            </ul>
          </div>
          <div className="flex gap-x-[30px] md:h-[45px] lg:h-[55px] items-center">
            <Button variant="outline" className="w-[100px] text-[22px] cursor-pointer hover:bg-[rgba(255,149,0,0.1)]">
              Sign Up
            </Button>
            <Button variant="outline" className="w-[117px] bg-[rgba(255,149,0,1)] text-white text-[22px] cursor-pointer hover:text-white hover:bg-[rgba(255,149,0,0.8)]">
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="md:hidden block relative">
        <div className="flex items-center justify-between h-[73px] border-[#f1f1f3] border-b-2 bg-[rgba(247,247,248,0.2)] rounded-[10px]">
          <div className="cursor-pointer size-[60px] flex items-center justify-center bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] rounded-[8px]">
            <img src="/icon.png" alt="Logo" className="size-[40px]" />
          </div>
          <div className="flex gap-x-[30px] h-[45px] items-center">
            <Button variant="outline" className="w-[100px] text-[22px] cursor-pointer hover:bg-[rgba(255,149,0,0.1)]">
              Sign Up
            </Button>
            <Button variant="outline" className="w-[117px] bg-[rgba(255,149,0,1)] text-white text-[22px] cursor-pointer hover:text-white hover:bg-[rgba(255,149,0,0.8)]">
              Login
            </Button>
            <div className="size-[40px] flex items-center justify-center cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" onClick={() => setShowSidebar(true)}>
              <Menu size={34} />
            </div>
          </div>
        </div>
        {showSidebar && (
          <div className="absolute top-0 left-0 px-0 w-full h-screen flex z-10">
            <div className="w-1/2 h-full bg-black/50 cursor-pointer" onClick={() => setShowSidebar(false)}></div>
            <div className="w-1/2 h-full bg-white z-20">
              <div className="flex flex-col h-full p-[20px]">
                <ul className="w-full flex flex-col items-center">
                  <li className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" onClick={() => setShowSidebar(false)}>
                    Home
                  </li>
                  <li className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" onClick={() => setShowSidebar(false)}>
                    Courses
                  </li>
                  <li className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" onClick={() => setShowSidebar(false)}>
                    About Us
                  </li>
                  <li className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" onClick={() => setShowSidebar(false)}>
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
