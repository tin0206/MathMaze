"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from 'next/link'
import { useUser } from "@/store/useUser"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const { user, setUser } = useUser()
  const [showSidebar, setShowSidebar] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    if (isLoading) return
    setIsLoading(true)
    const refreshToken = localStorage.getItem("refreshToken")
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ refreshToken: refreshToken })
    })
    if (result.status === 500) {
      console.error("Failed to logout")
      return
    }

    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    setUser(null)
    setIsLoading(false)
    router.push("/")
  }

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
          {
            !user ? (
              <div className="flex gap-x-[30px] md:h-[45px] lg:h-[55px] items-center">
                <Link href="/signup" className="w-[100px]">
                  <Button variant="outline" className="w-full text-[22px] cursor-pointer hover:bg-[rgba(255,149,0,0.1)]">
                    Sign Up
                  </Button>
                </Link>
                <Link href="/login" className="w-[117px]">
                  <Button variant="outline" className="w-full bg-[rgba(255,149,0,1)] text-white text-[22px] cursor-pointer hover:text-white hover:bg-[rgba(255,149,0,0.8)]">
                    Login
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="relative">
                <div 
                  className="flex items-center justify-center size-[60px] hover:bg-[rgba(255,149,0,0.1)] hover:rounded-[8px] cursor-pointer"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <div className="size-[45px] rounded-full bg-[rgba(255,149,0,1)] flex items-center justify-center text-white">
                    {user.name.split(" ").map(word => word[0].toUpperCase()).slice(0, 2).join("")}
                  </div>
                </div>
                {
                  showProfileMenu && (
                    <div 
                      className="absolute top-[70px] right-0 w-[350px] bg-white rounded-[10px] shadow-lg flex flex-col items-start z-10"
                      onMouseLeave={() => setShowProfileMenu(false)}
                    >
                      <div className="w-full p-[10px] flex border-b">
                        <div className="flex items-center justify-center size-[100px] cursor-pointer">
                          <div className="size-[70px] rounded-full bg-[rgba(255,149,0,1)] flex items-center justify-center text-white">
                            {user.name.split(" ").map(word => word[0].toUpperCase()).slice(0, 2).join("")}
                          </div>
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="text-[20px] font-bold ml-[10px]">{user.name}</div>
                          <div className="text-[16px] text-gray-500 ml-[10px] max-w-[200px] truncate">{user.email}</div>
                        </div>
                      </div>
                      <div className="w-full p-[10px] border-b">
                        <ul className="flex flex-col gap-y-[10px]">
                          <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                            Learning
                          </li>
                          <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                            My Cart
                          </li>
                          <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                            Wishlist
                          </li>
                        </ul>
                      </div>
                      <div className="w-full p-[10px] border-b">
                        <ul className="flex flex-col gap-y-[10px]">
                          <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                            Profile
                          </li>
                        </ul>
                      </div>
                      <div className="w-full p-[10px]">
                        <ul className="flex flex-col gap-y-[10px]">
                          <li 
                            className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]"
                            onClick={handleLogout}
                          >
                            Logout
                          </li>
                          <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                            Help
                          </li>
                        </ul>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
      <div className="md:hidden block relative">
        <div className="flex items-center justify-between h-[73px] border-[#f1f1f3] border-b-2 bg-[rgba(247,247,248,0.2)] rounded-[10px]">
          <div className="cursor-pointer size-[60px] flex items-center justify-center bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] rounded-[8px]">
            <img src="/icon.png" alt="Logo" className="size-[40px]" />
          </div>
          <div className="flex gap-x-[30px] h-[45px] items-center">
            {
              !user ? (
                <>
                  <Link href="/signup" className="w-[100px]">
                    <Button variant="outline" className="w-full text-[22px] cursor-pointer hover:bg-[rgba(255,149,0,0.1)]">
                      Sign Up
                    </Button>
                  </Link>
                  <Link href="/login" className="w-[117px]">
                    <Button variant="outline" className="w-full bg-[rgba(255,149,0,1)] text-white text-[22px] cursor-pointer hover:text-white hover:bg-[rgba(255,149,0,0.8)]">
                      Login
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="flex flex-col relative">
                  <div 
                    className="flex items-center justify-center size-[60px] hover:bg-[rgba(255,149,0,0.1)] hover:rounded-[8px] cursor-pointer"
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                  >
                    <div className="size-[45px] rounded-full bg-[rgba(255,149,0,1)] flex items-center justify-center text-white">
                      {user.name.split(" ").map(word => word[0].toUpperCase()).slice(0, 2).join("")}
                    </div>
                  </div>
                  {
                    showProfileMenu && (
                      <>
                        <div>
                          <div 
                            className="absolute top-[70px] right-[-80px] w-[350px] bg-white rounded-[10px] shadow-lg flex flex-col items-start z-10"
                            onMouseLeave={() => setShowProfileMenu(false)}
                          >
                            <div className="w-full p-[10px] flex border-b">
                              <div className="flex items-center justify-center size-[100px] cursor-pointer">
                                <div className="size-[70px] rounded-full bg-[rgba(255,149,0,1)] flex items-center justify-center text-white">
                                  {user.name.split(" ").map(word => word[0].toUpperCase()).slice(0, 2).join("")}
                                </div>
                              </div>
                              <div className="flex flex-col justify-center">
                                <div className="text-[20px] font-bold ml-[10px]">{user.name}</div>
                                <div className="text-[16px] text-gray-500 ml-[10px] max-w-[200px] truncate">{user.email}</div>
                              </div>
                            </div>
                            <div className="w-full p-[10px] border-b">
                              <ul className="flex flex-col gap-y-[10px]">
                                <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                                  Learning
                                </li>
                                <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                                  My Cart
                                </li>
                                <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                                  Wishlist
                                </li>
                              </ul>
                            </div>
                            <div className="w-full p-[10px] border-b">
                              <ul className="flex flex-col gap-y-[10px]">
                                <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                                  Profile
                                </li>
                              </ul>
                            </div>
                            <div className="w-full p-[10px]">
                              <ul className="flex flex-col gap-y-[10px]">
                                <li 
                                  className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]"
                                  onClick={handleLogout}
                                >
                                  Logout
                                </li>
                                <li className="h-[40px] flex items-center justify-start w-full text-[18px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px] px-[10px]">
                                  Help
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  }
                </div>
              )
            }
            <div className="size-[40px] flex items-center justify-center cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" onClick={() => setShowSidebar(true)}>
              <Menu size={34} />
            </div>
          </div>
        </div>
        { showSidebar && (
          <div className="fixed top-0 left-0 px-0 w-full h-screen flex z-10">
            <div className="w-1/2 h-full bg-black/50 cursor-pointer" onClick={() => setShowSidebar(false)}></div>
            <div className="w-1/2 h-full bg-white z-20">
              <div className="flex flex-col h-full p-[20px]">
                <ul className="w-full flex flex-col items-center">
                  <Link 
                    href="/" className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" 
                    onClick={(e) => {
                      e.preventDefault()
                      setShowSidebar(false)
                      setTimeout(() => {
                        router.push("/")
                      }, 300)
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/courses" className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" 
                    onClick={(e) => {
                      e.preventDefault()
                      setShowSidebar(false)
                      setTimeout(() => {
                        router.push("/courses")
                      }, 300)
                    }}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/about" className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" 
                    onClick={(e) => {
                      e.preventDefault()
                      setShowSidebar(false)
                      setTimeout(() => {
                        router.push("/about")
                      }, 300)
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact" className="h-[40px] flex items-center justify-center w-3/4 text-[22px] cursor-pointer hover:bg-[rgba(241,241,243,1)] hover:rounded-[8px]" 
                    onClick={(e) => {
                      e.preventDefault()
                      setShowSidebar(false)
                      setTimeout(() => {
                        router.push("/contact")
                      }, 300)
                    }}
                  >
                    Contact
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
