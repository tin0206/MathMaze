"use client"

import { Button } from "@/components/ui/button"
import { useCreateCourseFormStore } from "@/store/useCreateCourseFormStore"
import { useStepStore } from "@/store/useStepStore"
import { usePathname, useRouter } from "next/navigation"

export default function BottomBar() {
    const pathname = usePathname()
    const { courseType, title, time} = useCreateCourseFormStore()
    const { step, setStep } = useStepStore()
    const router = useRouter()
    
    const isCreatePage = pathname.includes("/course/create/")

    const allowNext = function () {
        if (pathname.endsWith("/1")) {
            return courseType !== null
        }
        if (pathname.endsWith("/2")) {
            return title.trim().length > 0
        }
        if (pathname.endsWith("/4")) {
            return time !== null
        }
        return true
    }

    return (
        <>
            {
                isCreatePage && (
                    <div className={`fixed bottom-0 w-full px-8 h-[72px] flex items-center ${!pathname.endsWith("/1") ? "justify-between" : "justify-end"} bg-white border-t`}>
                        <Button variant="outline" className={`${pathname.endsWith("/1") ? "hidden" : "block"} cursor-pointer rounded-[10px] w-[80px] h-[40px] px-3 border-[#FF9500] text-[#FF9500] hover:bg-[rgba(255,149,0,0.1)] hover:border-[#FF9500] hover:text-[#FF9500]`}
                            onClick={() => {
                                if (step > 1) {
                                    const prevStep = step - 1
                                    setStep(prevStep)
                                    router.push('/course/create/' + (prevStep))
                                }
                            }}
                        >
                            Back
                        </Button>
                        <Button className={`cursor-pointer rounded-[10px] w-[125px] h-[40px] px-3 bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] ${
                            allowNext() ? "" : "opacity-50 cursor-not-allowed"
                        }`}
                            onClick={() => {
                                if (allowNext()) {
                                    const currentStep = parseInt(pathname.split('/').pop() || '1', 10)
                                    const nextStep = currentStep + 1
                                    router.push('/course/create/' + (nextStep))
                                }
                            }}
                        >
                            {
                                pathname.endsWith("/4") ? "Create Course" : "Next"
                            }
                        </Button>
                    </div>
                )
            }
        </>
    )
}
