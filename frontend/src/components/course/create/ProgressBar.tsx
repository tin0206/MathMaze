"use client"

import { useStepStore } from "@/store/useStepStore"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ProgressBar() {
    const pathname = usePathname()
    const { step, maxStep } = useStepStore()

    if (!pathname.includes("/course/create/")) return null

    return (
        <>
            <div className="w-full h-[72px] flex items-center bg-white">
                <div className="flex items-center h-full px-2 pr-4 border-r">
                    <Link href={"/"} className='h-4/5 flex cursor-pointer items-center bg-[rgba(255,149,0,1)] rounded-[10px] px-2'>
                        <img src="/icon.png" alt="Logo" className="size-[32px]" />
                        <span className="text-white ml-2 cursor-default">MathMaze</span>
                    </Link>
                </div>
                <div className="flex-1 flex h-full items-center justify-between px-8">
                    <div className="text-lg flex space-x-3">
                        <div>
                            Step:
                        </div>
                        <div>
                            {step} / {maxStep}
                        </div>
                    </div>
                    <div className="text-lg h-3/5 w-[60px] flex space-x-4 text-[#FF9500] justify-center items-center hover:cursor-pointer hover:bg-[rgba(255,149,0,0.1)] hover:rounded-[10px]">
                        Exit
                    </div>
                </div>
            </div>
            <div className="w-full h-[6px] bg-[rgba(255,149,0,0.2)]">
                <div className="h-full bg-[rgba(255,149,0,1)]" style={{ width: `${(step / maxStep) * 100}%` }}></div>
            </div>
        </>
    )
}
