"use client"

import { Button } from "@/components/ui/button"
import { useResourcesCreatingCourses } from "@/store/useResourcesCreatingCourses"
import { useState } from "react"

export default function Content() {
    const [option, setOption] = useState<"course" | "bundle">("course")
    const { resources } = useResourcesCreatingCourses()

    return (
        <div className="mt-[5px] md:mt-[10px] px-[10px] md:px-[24px] lg:px-[48px] flex flex-col gap-y-[50px] md:gap-y-[70px] mb-[50px] md:mb-[100px]">
            <div className="flex flex-col gap-y-[10px] md:gap-y-8">
                <h1 className="font-semibold text-[28px] md:text-[38px] lg:text-[48px]">Courses</h1>
                <ul className="flex gap-x-4 border-b h-[50px]">
                    <li className={`px-1 py-2 cursor-pointer ${option === "course" ? "border-b-4 font-semibold border-[#FF9500]" : "hover:text-[rgb(255,149,0)]"}`}
                        onClick={() => setOption("course")}
                    >
                        Course
                    </li>
                    <li className={`px-1 py-2 cursor-pointer ${option === "bundle" ? "border-b-4 font-semibold border-[#FF9500]" : "hover:text-[rgb(255,149,0)]"}`}
                        onClick={() => setOption("bundle")}
                    >
                        Course Bundle
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
                {option === "course" ? (
                    <>
                        <div className="flex flex-col items-center gap-y-8 w-full">
                            <div className="w-full h-[210px] md:h-[138px] flex flex-col md:flex-row items-center md:justify-between gap-y-10 md:gap-y-0 border p-10 lg:p-12">
                                <h2 className="font-medium text-[18px] md:text-[20px] lg:text-[22px]">Start creating your course</h2>
                                <Button className="w-[290px] px-3 cursor-pointer bg-[#FF9500] hover:bg-[#e68500] text-white mt-4 md:mt-0 md:ml-6">Create Course</Button>
                            </div>
                            <p className="text-[18px] md:text-[20px] lg:text-[22px]">Based on your experience, we believe these resources will help you.</p>
                            <div className="w-full flex flex-col gap-y-6">
                                {resources.map((resource) => (
                                    <div key={resource.id} className="w-full grid grid-cols-1 md:grid-cols-9 px-[48px] pt-[16px] md:pt-[32px] pb-[24px] md:pb-[16px] border shadow-md gap-y-4 md:gap-y-0 md:gap-x-5">
                                        <div className="md:col-span-3 flex justify-center items-center">
                                            <img src={resource.image || "/placeholder.png"} alt={resource.title} className="h-full w-auto shadow-sm rounded-[10px]" />
                                        </div>
                                        <div className="md:col-span-6">
                                            <h3 className="font-medium text-[22px] lg:text-[26px] mb-2">{resource.title}</h3>
                                            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-justify">{resource.description}</p>
                                            <div className="mt-4">
                                                <a href={resource.link || ""} target="_blank" rel="noopener noreferrer" className="text-[#FF9500] underline">Start</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    option === "bundle" ? (
                        <div className="flex flex-col items-center gap-y-6 w-full">
                            <div className="mb-8">
                                <img src="/bundle_courses.png" alt="Bundle Courses" className="w-[420px] h-auto" />
                            </div>
                            <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[22px]">Start creating your course bundle</h2>
                            <p className="text-[18px] md:text-[20px] lg:text-[22px] text-center">Bundle and showcase your courses to reach more learners.</p>
                            <Button className="w-[188px] px-3 cursor-pointer bg-[#FF9500] hover:bg-[#e68500] text-white mt-4 md:mt-0 md:ml-6">
                                + Create Course Bundle
                            </Button>
                        </div>
                    ) : (
                        <></>
                    )
                )}
            </div>
        </div>
    )
}
