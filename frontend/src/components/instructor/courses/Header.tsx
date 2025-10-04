"use client"

import { useUserStore } from '@/store/useUserStore'
import { useState } from 'react'
import { Bell } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLogout } from '@/app/utils/auth'


export default function Header() {
    const { user } = useUserStore()
    const logout = useLogout()
    const [isLoading, setIsLoading] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const router = useRouter()

    const handleLogout = async () => {
        if (isLoading) return
        setIsLoading(true)

        await logout()
        
        setIsLoading(false)
        router.push("/")
    }

    return (
        <div className='w-full h-[72px] px-3 md:px-6 flex justify-end items-center gap-x-4'>
            <div className="h-[60px] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,149,0,0.1)] hover:rounded-[8px] px-3.5">
                <Bell className="text-gray-500" />
            </div>
            <div className="relative">
                <div 
                  className="flex items-center justify-center size-[60px] hover:bg-[rgba(255,149,0,0.1)] hover:rounded-[8px] cursor-pointer"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <div className="size-[45px] rounded-full bg-[rgba(255,149,0,1)] flex items-center justify-center text-white">
                    {user?.name.split(" ").map(word => word[0].toUpperCase()).slice(0, 2).join("")}
                  </div>
                </div>
                {
                    showProfileMenu && (
                        <div
                            className="absolute top-[70px] right-0 w-[250px] bg-white rounded-[10px] shadow-lg flex flex-col items-start z-10"
                            onMouseLeave={() => setShowProfileMenu(false)}
                        >
                        <div className="w-full p-[10px] flex border-b">
                            <div className="flex items-center justify-center size-[100px] cursor-pointer">
                                <div className="size-[70px] rounded-full bg-[rgba(255,149,0,1)] flex items-center justify-center text-white">
                                    {user?.name.split(" ").map(word => word[0].toUpperCase()).slice(0, 2).join("")}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-[20px] font-bold ml-[10px]">{user?.name}</div>
                                <div className="text-[16px] text-gray-500 ml-[10px] max-w-[200px] truncate">{user?.email}</div>
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
        </div>
    )
}
