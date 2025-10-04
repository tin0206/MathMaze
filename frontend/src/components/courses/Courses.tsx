"use client"

import { useCoursesStore } from "@/store/useCoursesStore"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Courses() {
    const { courses } = useCoursesStore()

    return (
        <div className="mt-[50px] md:mt-[100px] flex flex-col gap-y-[20px] md:gap-y-[40px] lg:gap-y-[50px] mb-[50px] md:mb-[100px]">
            {courses.map((course) => (
                <div key={course.id} className="p-6 md:p-10 lg:p-[50px] flex flex-col gap-y-[40px] lg:gap-y-[50px] bg-white rounded-[10px]">
                    <div className="flex flex-col gap-y-6 lg:gap-y-[30px]">
                        <div className="w-full flex flex-col md:flex-row md:gap-x-[50px] gap-y-[20px] md:gap-y-0 md:items-center">
                            <div>
                                <h2 className="font-semibold text-[18px] md:text-[20px] lg:text-[24px]">{course.title}</h2>
                                <p className="mt-1 text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">{course.description}</p>
                            </div>
                            <div className="ml-auto">
                                <Button asChild variant={"outline"} className="w-[119px] lg:w-[160px] h-[49px] lg:h-[63px] px-[16px] py-[14px] rounded-[8px] font-medium text-[18px] cursor-pointer">
                                    <Link href={`/course/${course.title.replace(/\s+/g, "-").toLowerCase()}`}>
                                        View Course
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        {course.images.length > 0 ? (
                            <div className={`grid grid-cols-${course.images.length} gap-x-4`}>
                                {course.images.map((img, index) => (
                                    <img key={index} src={img} alt={`Course Image ${index + 1}`} className="rounded-[8px]" />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-x-4">
                                <img src="/placeholder.png" alt="" className="rounded-[8px]" />
                                <img src="/placeholder.png" alt="" className="rounded-[8px]" />
                                <img src="/placeholder.png" alt="" className="rounded-[8px]" />
                            </div>
                        )}
                        <div className="w-full flex items-center">
                            <div className="flex flex-col md:flex-row w-full justify-between md:items-center gap-y-3 md:gap-y-0">
                                <div className="flex gap-x-2">
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.time}</Button>
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.level}</Button>
                                </div>
                                <div>
                                    <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">By {course.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg">
                        <div>
                            <h2 className="font-semibold text-[16px] md:text-[18px] lg:text-[22px] px-5 md:px-6 lg:px-[30px] py-[14px] border-b md:py-5 lg:py-6">Curriculum</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {course.curriculum.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:px-[40px] lg:px-[50px] items-center justify-center p-6 border-r border-b`} 
                                >
                                    <div className="w-full">
                                        <h3 className="text-[30px] md:text-[40px] lg:text-[50px] font-extrabold">{String(index + 1).padStart(2, "0")}</h3>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-2 text-[#2f2f2f]">{item.module}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
