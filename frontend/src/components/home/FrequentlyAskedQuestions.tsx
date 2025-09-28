"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from 'lucide-react'


export default function FrequentlyAskedQuestions() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(1)

    const faqs = [
        {
            id: 1,
            question: "Can I enroll in multiple courses at once?",
            answer: "Yes, you can enroll in multiple courses simultaneously. Our platform allows you to manage your learning schedule according to your preferences.",
            title: "Enrollment Process for Different Courses",
        },
        {
            id: 2,
            question: "What kind of support can I expect from instructors?",
            answer: "Our instructors are available to provide guidance, answer questions, and offer feedback on assignments. You can reach out to them through the course discussion forums or direct messaging.",
            title: "Instructor Support and Interaction",
        },
        {
            id: 3,
            question: "Are the courses self-paced or do they have specific start and end dates?",
            answer: "Most of our courses are self-paced, allowing you to learn at your own speed. However, some courses may have specific start and end dates, which will be clearly indicated in the course description.",
            title: "Course Pacing and Scheduling",
        },
        {
            id: 4,
            question: "Are there any prerequisites for the courses?",
            answer: "Some courses may have prerequisites, which will be listed in the course description. We recommend reviewing these requirements to ensure you have the necessary background knowledge before enrolling.",
            title: "Course Prerequisites and Requirements",
        },
        {
            id: 5,
            question: "Can I download the course materials for offline access?",
            answer: "Yes, many of our courses offer downloadable materials such as PDFs, videos, and other resources for offline access. Please check the course details for specific information on available downloads.",
            title: "Accessing Course Materials Offline",
        }
    ]
    
    return (
        <div className="mt-[50px] md:mt-[100px] flex flex-col md:flex-row md:gap-x-[60px] lg:gap-x-[120px] gap-y-8 md:gap-y-0 p-[24px] bg-white rounded-[10px] mb-[50px] md:mb-[100px]">
            <div className="md:w-2/5 max-w-[408px] flex flex-col gap-y-[20px] md:gap-y-[40px] lg:gap-y-[50px]">
                <div className="w-full">
                    <h1 className="font-semibold text-[28px] md:text-[38px] lg:text-[48px]">Frequently Asked Questions</h1>
                    <p className="mt-[10px] text-[14px] md:text-[16px] lg:text-[18px] text-[#333333]">Still you have any questions? Contact our Team via support@skillbridge.com</p>
                </div>
                <Button variant={"outline"} className="w-[130px] lg:w-[164px] h-[49px] lg:h-[63px] px-5 py-[14px] rounded-[8px] font-medium text-[18px] cursor-pointer">View All FAQ's</Button>
            </div>
            <ul className="md:w-3/5 flex flex-col gap-y-[20px] md:gap-y-[30px]">
                {faqs.map((faq) => (
                    <li key={faq.id} className="px-[24px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[24px] lg:py-[30px] border-[0.5px] rounded-[12px] shadow-sm">
                        <div className="flex items-center justify-between w-full mb-2">
                            <p className="font-medium text-[#262626] text-[16px] md:text-[18px] lg:text-[20px] w-4/5">{faq.question}</p>
                            <Button
                                variant={"outline"} className="size-[40px] p-[10px] rounded-[8px] cursor-pointer bg-[rgba(255,244,230,1)] hover:bg-[rgba(255,244,230,0.8)]"
                                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                            >
                                <span className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">
                                    {openFAQ === faq.id ? "-" : "+"}
                                </span>
                            </Button>
                        </div>
                        {openFAQ === faq.id && (
                            <hr className="border-[#f1f1f3]" />
                        )}
                        {openFAQ === faq.id && (
                            <div className="mt-[20px] md:mt-[40px] lg:mt-[50px]">
                                <p className="text-[#4c4c4d] text-[14px] md:text-[16px] lg:text-[18px]">{faq.answer}</p>
                                <div className="mt-[20px] md:mt-[40px] lg:mt-[50px] items-center rounded-[8px] flex bg-[#f7f7f8] px-[20px] md:px-[24px] lg:px-[30px] py-[12px] md:py-[16px] lg:py-[20px]">
                                    <p className="w-4/5 text-[14px] md:text-[16px] lg:text-[18px] text-[#656567]">
                                        {faq.title}
                                    </p>
                                    <Button variant={"outline"} className="size-[40px] md:size-[48px] lg:size-[56px] p-[10px] md:p-[12px] lg:p-[14px] cursor-pointer bg-[#ffffff] hover:bg-[rgba(247,247,248,0.2)] rounded-full flex items-center justify-center">
                                        <ArrowRight className="size-[20px] md:size-[24px] lg:size-[28px]" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
