"use client"

import { MonitorPlay, MessageSquareText,ChartNoAxesColumn } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname()
    
    return (
        <>
            <div className='relative hidden md:block'>
                <div className="w-[56px] h-full bg-[#14213d] sticky top-0 z-10" />
                <div className="absolute top-0 left-0 w-[56px] hover:w-[250px] h-full bg-[#14213d] transition-all duration-500 group overflow-hidden z-20">
                    <ul className='sticky top-0'>
                        <Link href={'/'} className="w-full cursor-pointer flex h-[56px] items-center hover:bg-[rgba(255,149,0,0.1)]">
                            <div className={`w-[56px] h-full flex items-center justify-center border-[#FF9500]`}>
                                <img src="/icon.png" alt="Logo" className="size-[24px]" />
                            </div>
                            <div className="text-white max-w-0 opacity-0 overflow-hidden group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500">
                                MathMaze
                            </div>
                        </Link>
                        <Link href={'/instructor/courses'} className="w-full cursor-pointer flex h-[56px] items-center hover:bg-[rgba(255,149,0,0.1)]">
                            <div className={`w-[56px] h-full flex items-center justify-center border-[#FF9500] ${pathname.includes('instructor/courses') ? 'border-l-4' : ''}`}>
                                <MonitorPlay className="text-white" />
                            </div>
                            <div className="text-white max-w-0 opacity-0 overflow-hidden group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500">
                                Courses
                            </div>
                        </Link>
                        <li className="w-full cursor-pointer flex h-[56px] items-center hover:bg-[rgba(255,149,0,0.1)]">
                            <div className={`w-[56px] h-full flex items-center justify-center border-[#FF9500] ${pathname.includes('instructor/messages') ? 'border-l-4' : ''}`}>
                                <MessageSquareText className="text-white" />
                            </div>
                            <div className="text-white max-w-0 opacity-0 overflow-hidden group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500">
                                Messages
                            </div>
                        </li>
                        <li className="w-full cursor-pointer flex h-[56px] items-center hover:bg-[rgba(255,149,0,0.1)]">
                            <div className={`w-[56px] h-full flex items-center justify-center border-[#FF9500] ${pathname.includes('instructor/analytics') ? 'border-l-4' : ''}`}>
                                <ChartNoAxesColumn className="text-white" />
                            </div>
                            <div className="text-white max-w-0 opacity-0 overflow-hidden group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500">
                                Analytics
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:hidden px-6 w-full h-[56px] bg-[#14213d] flex items-center justify-between'>
                <Link href={'/'} className='flex items-center'>
                    <img src="/icon.png" alt="Logo" className="size-[32px]" />
                    <span className="text-white ml-2">MathMaze</span>
                </Link>
                <ul className='flex gap-x-4 text-white'>
                    <Link href={'/instructor/courses'} className={`cursor-pointer ${pathname.includes('instructor/courses') ? 'border-b-4 font-semibold border-[#FF9500]' : 'hover:text-[rgb(255,149,0)]'}`}>
                        Courses
                    </Link>
                    <li className={`cursor-pointer ${pathname.includes('instructor/messages') ? 'border-b-4 font-semibold border-[#FF9500]' : 'hover:text-[rgb(255,149,0)]'}`}>
                        Messages
                    </li>
                    <li className={`cursor-pointer ${pathname.includes('instructor/analytics') ? 'border-b-4 font-semibold border-[#FF9500]' : 'hover:text-[rgb(255,149,0)]'}`}>
                        Analytics
                    </li>
                </ul>
            </div>
        </>
    )
}
