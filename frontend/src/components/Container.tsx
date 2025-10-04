"use client"

import { usePathname } from "next/navigation"

export default function Container({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const backgroundCheck = function() {
        if (pathname.includes("/course/create/")) {
            return false
        }
        return true
    }

    return (
        <div className={`w-full flex flex-col xl:items-center ${backgroundCheck() ? 'bg-[rgba(247,247,248,1)]' : ''}`}>
        {children}
        </div>
    )
}
