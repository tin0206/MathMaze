"use client"

import { useStepStore } from "@/store/useStepStore"
import { MonitorPlay, ClipboardList } from 'lucide-react'
import { useEffect, useMemo, useState } from "react"
import { useCreateCourseFormStore } from "@/store/useCreateCourseFormStore"
import { redirect } from "next/navigation"

type CourseCreateFormProps = {
    inputStep: number;
}

export default function CourseCreateForm({ inputStep }: CourseCreateFormProps) {
    const { step, setStep, maxStep } = useStepStore()
    const { courseType, setCourseType, title, setTitle, category, setCategory, categoryList, time, setTime, timeList } = useCreateCourseFormStore()
    const maxValue = 60

    const remainingChars = useMemo(() => {
        const remaining = maxValue - title.length
        return remaining >= 0 ? remaining : 0
    }, [title])


    useEffect(() => {
        if (inputStep < 1 || inputStep > maxStep || isNaN(inputStep)) {
            redirect('/course/create/1')
        }

        if (inputStep === 2 && courseType === null) {
            redirect('/course/create/1')
        }
        if ((inputStep === 3 || inputStep === 4) && (courseType === null || title.trim().length === 0)) {
            redirect('/course/create/1')
        }
        
        if (inputStep !== step) {
            setStep(inputStep)
        }

    }, [inputStep, step, maxStep])

    return (
        <div className="w-full flex justify-center">
            <div className="py-16 px-6">
                {
                    step === 1 && (
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="font-bold text-[18px] md:text-[25px] lg:text-[30px] text-center">
                                First, find out what type of course you want to create.
                            </h2>
                            <div className="mt-16 flex justify-center">
                                <ul className="w-[500px] md:w-[600px] md:h-[300px] gap-y-6 md:gap-y-0 gap-x-6 grid grid-cols-1 md:grid-cols-2">
                                    <li 
                                        className={`flex flex-col items-center border py-8 px-4 cursor-pointer hover:bg-[rgba(255,149,0,0.1)] ${courseType === "video" ? "border-[rgba(255,149,0,1)] border-4" : ""}`}
                                        onClick={() => setCourseType("video")}
                                    >
                                        <MonitorPlay size={32} />
                                        <div className="font-semibold text-lg my-4">
                                            Video Course
                                        </div>
                                        <div className="text-center">
                                            Video lectures, quizzes, coding exercises, and more can help you create a rich learning experience.
                                        </div>
                                    </li>
                                    <li 
                                        className={`flex flex-col items-center border py-8 px-4 cursor-pointer hover:bg-[rgba(255,149,0,0.1)] ${courseType === "test" ? "border-[rgba(255,149,0,1)] border-4" : ""}`}
                                        onClick={() => setCourseType("test")}
                                    >
                                        <ClipboardList size={32} />
                                        <div className="font-semibold text-lg my-4">
                                            Practical Test
                                        </div>
                                        <div className="text-center">
                                            Help learners prepare for certification exams by providing practice questions.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
                {
                    step === 2 && (
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="font-bold text-[18px] md:text-[25px] lg:text-[30px] text-center">
                                So what about the content heading?
                            </h2>
                            <p className="mt-6 text-center text-[16px] md:text-[18px] lg:text-[20px] text-gray-500">
                                No worries if a good title doesn't come to you right away. You can always change it later.
                            </p>
                            <div className="mt-16 flex items-center w-[500px] md:w-[650px]">
                                <input
                                    value={title}
                                    onChange={(e) => {
                                        const newValue = e.target.value
                                        if (newValue.length <= maxValue) {
                                            setTitle(newValue)
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (title.length >= maxValue) {
                                            const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"]
                                            if (!allowedKeys.includes(e.key)) {
                                                e.preventDefault()
                                            }
                                        }
                                    }}
                                    type="text"
                                    placeholder="Ex: Linear Algebra for Beginners"
                                    className="flex-1 text-[14px] border p-2 focus:outline-none"
                                />
                                <div className="ml-4 text-gray-400 w-12 flex-shrink-0">{remainingChars}</div>
                            </div>
                        </div>
                    )
                }
                {
                    step === 3 && (
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="font-bold text-[18px] md:text-[25px] lg:text-[30px] text-center">
                                Which category is most appropriate for the knowledge you will be sharing?
                            </h2>
                            <p className="mt-6 text-center text-[16px] md:text-[18px] lg:text-[20px] text-gray-500">
                                If you're unsure about the right category, you can change it later.
                            </p>
                            <div className="mt-16 flex items-center w-[500px] md:w-[650px]">
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="border p-2 w-full"
                                >
                                    {categoryList.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )
                }
                {
                    step === 4 && (
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="font-bold text-[18px] md:text-[25px] lg:text-[30px] text-center">
                                How many hours per week can you dedicate to creating your course?
                            </h2>
                            <p className="mt-6 text-center text-[16px] md:text-[18px] lg:text-[20px] text-gray-500">
                                There are no wrong answers. We can help you reach your goals even if you don't have much time available.
                            </p>
                            <div className="mt-16 flex flex-col w-[500px] md:w-[650px] gap-y-5">
                                {timeList.map((timeOption, index) => (
                                    <label key={index} className={`cursor-pointer border flex gap-x-5 px-5 py-3 rounded-[10px] ${
                                        time === timeOption.value ? "border-[rgba(255,149,0,1)] bg-[rgba(255,149,0,0.1)]" : "border-gray-300"
                                    }`}>
                                        <input
                                            type="radio" 
                                            name="time"
                                            value={timeOption.label}
                                            className="sr-only"
                                            onChange={() => {
                                                if (timeOption.label === "I haven't decided yet") setTime(-1)
                                                else if (timeOption.label === "I'm very busy (0-2 hours/week)") setTime(0)
                                                else if (timeOption.label === "I can do it, but it will be a side project (3-5 hours/week)") setTime(1)
                                                else if (timeOption.label === "I have some time (6-8 hours/week)") setTime(2)
                                                else if (timeOption.label === "I can dedicate a good amount of time (9-11 hours/week)") setTime(3)
                                                else if (timeOption.label === "I'm all in! (12+ hours/week)") setTime(4)
                                            }}
                                        />
                                        <div
                                            className={`w-5 h-5 rounded-full border flex items-center justify-center
                                            ${time === timeOption.value ? "bg-[#FF9500] border-[#FF9500]" : "bg-white border-gray-300"}`}
                                        >
                                            {time === timeOption.value && <div className="w-3 h-3 rounded-full bg-white" />}
                                        </div>
                                        <span>{timeOption.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
