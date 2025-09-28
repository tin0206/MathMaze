"use client"

import { useCourses } from "@/store/useCourses"
import { Button } from "../ui/button"
import Link from 'next/link'

export default function Courses() {
    const { courses } = useCourses()

    return (
        <div className="mt-[50px] md:mt-[100px] flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px]">
            <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-[250px] lg:gap-x-[300px]">
                <div className="md:w-3/4">
                    <h1 className="font-semibold text-[28px] md:text-[38px] lg:text-[48px]">Our Courses</h1>
                    <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">Explore our diverse range of math courses designed to enhance your skills and confidence.</p>
                </div>
                <div className="md:w-1/4 flex items-start md:justify-end md:items-end">
                    <Link href="/courses" className="w-[96px]">
                        <Button variant={"outline"} className="w-full lg:w-[120px] h-[49px] lg:h-[63px] px-5 py-[14px] rounded-[8px] font-medium text-[18px] cursor-pointer">
                            View All
                        </Button>
                    </Link>
                </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-x-[30px] md:gap-y-[30px]">
                {courses.map((course) => (
                    <li key={course.id} className="p-6 md:p-[45px] flex flex-col bg-[#ffffff] rounded-[10px] gap-y-[24px] md:gap-y-[30px]">
                        <div className="w-full flex items-center justify-center">
                            <img src={course.images.length > 0 ? course.images[0] : "/placeholder.png"} alt={course.title} className="max-h-[500px] rounded-[10px]" />
                        </div>
                        <div className="w-full flex items-center">
                            <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-y-3 lg:gap-y-0">
                                <div className="flex gap-x-2">
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.time}</Button>
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.level}</Button>
                                </div>
                                <div>
                                    <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">By {course.author}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h2 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px]">{course.title}</h2>
                            <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">{course.description}</p>
                        </div>
                        <Button asChild variant={"outline"} className="h-[49px] lg:h-[63px] px-6 py-[14px] md:py-[18px] cursor-pointer bg-[rgba(247,247,248,0.5)] hover:bg-[rgba(247,247,248)]">
                            <Link href={`/course/${course.title.replace(/\s+/g, "-").toLowerCase()}`}>
                                View Course
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
