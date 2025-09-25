"use client"

import { useCourses } from "@/store/useCourses"
import { Button } from "../ui/button"
import { TvMinimalPlay, NotebookText, ScrollText, MoveDown, MoveUp, Languages } from 'lucide-react'
import { Chapter } from "@/app/model"
import { useState } from "react"

type ContentContainerProps = {
    course_name: string
}

export default function ContentContainer({ course_name }: ContentContainerProps) {
    const { getCourseByName } = useCourses()
    const course = getCourseByName(course_name)
    const [expanded, setExpanded] = useState(false)
    const paragraphs = course?.brief.split('\n\n')
    const [openSections, setOpenSections] = useState<number[]>([])

    const toggleSection = (index: number) => {
        setOpenSections(prev => 
            prev.includes(index)
            ? prev.filter(i => i !== index)
            : [...prev, index] 
        )
    }

    const toggleAllSections = () => {
        if (openSections.length === course?.curriculum.length) {
            setOpenSections([])
        } else {
            setOpenSections(course?.curriculum.map((_, index) => index) || [])
        }
    }

    return (
        <div>
            {course ? (
                <div className="mt-[50px] md:mt-[80px] lg:mt-[110px] w-full flex flex-col gap-y-[10px] md:gap-y-[30px] lg:gap-y-[50px] mb-[50px] md:mb-[100px]">
                    <div className="w-full flex flex-col md:flex-row md:px-[20px] lg:px-[50px] gap-y-[16px] md:gap-y-0 md:gap-x-[120px] lg:gap-x-[240px] pb-[30px] md:pb-[40px] lg:pb-[50px] border-b">
                        <h2 className="md:w-2/5 text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-[34px] md:leading-[44px] lg:leading-[58px]">
                            {course?.title}
                        </h2>
                        <p className="md:w-2/5 text-[14px] ...">{course?.description}</p>
                    </div>
                    <div className="w-full flex flex-col gap-y-[20px] md:gap-y-[30px] lg:gap-y-[60px]">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-4/5 rounded-[10px] p-[10px] md:p-[20px] lg:p-[40px] bg-white flex items-center justify-center shadow-md">
                                <img src="/placeholder.png" alt="Course Image" className="max-h-[650px] object-cover rounded-[10px]" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-y-5">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 md:gap-y-0">
                                <div className="flex gap-x-2">
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course?.level}</Button>
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">By {course?.author}</Button>
                                </div>
                                <Button variant={"outline"} className="max-w-[270px] text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">Last updated: {course?.updated_date}</Button>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <h3 className="text-[18px] md:text-[20px] lg:text-[24px]">Price:</h3>
                                <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">{course.price} $</h3>
                            </div>
                            <div className="flex items-center">
                                <Button variant={"outline"} className="border-[#FF9500] text-[#FF9500] hover:bg-[rgba(255,149,0,0.1)] rounded-[10px] mr-4 cursor-pointer">
                                    Add to Wishlist
                                </Button>
                                <Button className="bg-[#FF9500] rounded-[10px] text-white hover:bg-[#e68500] cursor-pointer">
                                    Buy Now
                                </Button>
                            </div>
                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">Course Overview</h3>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 md:gap-y-0">
                                <div className="flex flex-row gap-x-4">
                                    <div className="flex gap-x-2">
                                        <TvMinimalPlay className="w-6 h-6 text-[#656567]" />
                                        <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">{course?.time}</p>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <NotebookText className="w-6 h-6 text-[#656567]" />
                                        <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">{course?.curriculum.length} sections</p>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <ScrollText className="w-6 h-6 text-[#656567]" />
                                        <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">{course?.curriculum.reduce((sum, section) => sum + section.chapters.length, 0)} chapters</p>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <Languages className="w-6 h-6 text-[#656567]" />
                                        <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">{course?.language.join(", ")}</p>
                                    </div>
                                </div>
                                <Button 
                                    variant={"outline"} className="cursor-pointer text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[rgba(255,149,0,0.1)]"
                                    onClick={toggleAllSections}
                                >
                                    {openSections.length === course?.curriculum.length ? "Collapse All" : "Expand All"}
                                </Button>
                            </div>
                            <ul className="flex flex-col gap-y-[20px] md:gap-y-[30px]">
                                {course?.curriculum.map((section, index) => (
                                    <li key={index} className="px-[24px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[24px] lg:py-[30px] border-[0.5px] rounded-[12px] shadow-sm bg-white">
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex flex-row gap-x-2 items-center">
                                                <div className="cursor-pointer bg-[rgba(255,244,230,1)] hover:bg-[rgba(255,244,230,0.8)] flex items-center justify-center size-[40px] border rounded-[8px]"
                                                    onClick={() => toggleSection(index)}
                                                >
                                                    {openSections.includes(index) ? <MoveUp className="size-[20px] md:size-[24px] lg:size-[28px]" /> : <MoveDown className="size-[20px] md:size-[24px] lg:size-[28px]" />}
                                                </div>
                                                <h4 className="ml-2 text-[16px] md:text-[18px] lg:text-[20px] font-semibold">{section?.module}</h4>
                                            </div>
                                            <div className="flex flex-row gap-x-2 items-center">
                                                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#656567]">{section?.chapters.length} chapters</p>
                                                <div className="text-[14px] md:text-[16px] lg:text-[18px] text-[#656567]">-</div>
                                                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#656567]">
                                                    {(() => {
                                                        const totalSeconds = section.chapters.reduce((sum, chapter: Chapter) => {
                                                            const parts = chapter.time.split(' ')
                                                            let seconds = 0
                                                            for (let i = 0; i < parts.length; i += 2) {
                                                                const value = parseFloat(parts[i])
                                                                const unit = parts[i + 1]
                                                                if (unit.startsWith('hour')) seconds += value * 3600
                                                                if (unit.startsWith('min')) seconds += value * 60
                                                                if (unit.startsWith('sec')) seconds += value
                                                            }

                                                            return sum + seconds
                                                        }, 0) ?? 0

                                                        const hours = Math.floor(totalSeconds / 3600)
                                                        const minutes = Math.floor((totalSeconds % 3600) / 60)
                                                        const seconds = totalSeconds % 60

                                                        const parts: string[] = []
                                                        if (hours > 0) parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`)
                                                        if (minutes > 0) parts.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`)
                                                        if (seconds > 0) parts.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`)
                                                        return parts.join(", ") 
                                                    })()}
                                                </p>
                                            </div>
                                        </div>
                                        {openSections.includes(index) && (
                                            <div className="mt-[10px] md:mt-[20px] lg:mt-[30px] p-[10px] md:p-[20px] lg:p-[40px] flex flex-col gap-y-[10px] md:gap-y-[20px] lg:gap-y-[30px] border rounded-[8px]">
                                                {section.chapters.map((chapter, chapIndex) => (
                                                    <div key={chapIndex} className="flex flex-row justify-between items-center">
                                                        <div className="flex flex-row gap-x-2 items-center">
                                                            <TvMinimalPlay className="w-6 h-6 text-[#656567]" />
                                                            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#656567]">{chapter.title}</p>
                                                        </div>
                                                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#656567]">
                                                            {(() => {
                                                                const parts = chapter.time.split(' ')
                                                                let hours = 0, minutes = 0, seconds = 0
                                                                for (let i = 0; i < parts.length; i += 2) {
                                                                    const value = parseFloat(parts[i])
                                                                    const unit = parts[i + 1]
                                                                    if (unit.startsWith('hour')) hours += value
                                                                    if (unit.startsWith('min')) minutes += value
                                                                    if (unit.startsWith('sec')) seconds += value
                                                                }
                                                                
                                                                minutes += Math.floor(seconds / 60)
                                                                seconds = seconds % 60
                                                                hours += Math.floor(minutes / 60)
                                                                minutes = minutes % 60

                                                                const pad = (n: number) => String(n).padStart(2, '0')
                                                                if (seconds > 0) {
                                                                    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
                                                                }
                                                                return `${pad(hours)}:${pad(minutes)}`
                                                            })()}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full flex flex-col gap-y-5">
                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">Requisites</h3>
                            <ul className="list-disc list-inside flex flex-col gap-y-[10px] md:gap-y-[15px] lg:gap-y-[20px]">
                                {course?.requisites.map((req, index) => (
                                    <li key={index} className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">{req}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full flex flex-col gap-y-5">
                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">Course Description</h3>
                            <div>
                                {expanded ? (
                                    paragraphs?.map((para, idx) => (
                                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a] mb-2" key={idx}>
                                            {para}
                                        </p>
                                    ))
                                ) : (
                                    paragraphs?.slice(0, 2).map((para, idx) => (
                                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a] mb-2" key={idx}>
                                            {para}
                                        </p>
                                    )
                                ))}
                            </div>
                            {paragraphs && paragraphs.length > 2 && (
                                <div className="flex flex-row items-center justify-center cursor-pointer w-[138px] h-[50px] p-2 md:p-3 rounded-[8px] hover:bg-[rgba(255,149,0,0.1)]"
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    <div className="text-[14px] md:text-[16px] lg:text-[18px]">
                                        {!expanded ? (
                                            <span className="text-[#FF9500]">Read More</span>
                                        ) : (
                                            <span className="text-[#FF9500]">Show Less</span>
                                        )}
                                    </div>
                                    <div className="text-[12px] md:text-[14px] lg:text-[16px] text-[#FF9500]">
                                        {!expanded ? <MoveDown className="inline-block w-4 h-4 ml-1" /> : <MoveUp className="inline-block w-4 h-4 ml-1" />}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-[50px] md:mt-[80px] lg:mt-[110px] w-full flex flex-col mb-[50px] md:mb-[100px]">
                    <p className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">Course not found.</p>
                </div>
            )}
        </div>
    )
}
