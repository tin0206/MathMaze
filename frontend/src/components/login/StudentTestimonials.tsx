"use client"

import { useTestimonialsStore } from "@/store/useTestimonialsStore";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function StudentTestimonials() {
    const { testimonials } = useTestimonialsStore()
    const [indexOfTestimonial, setIndexOfTestimonial] = useState<number>(0)

    return (
        <div className="flex flex-col items-center gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-y-[10px]">
                <h2 className="text-[28px] md:text-[30px] lg:text-[38px] font-medium">Students Testimonials</h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#59595a]">
                    Hear what our students have to say about their learning experience with us.
                </p>
            </div>
            <div className="w-full flex flex-col gap-y-[20px] md:gap-y-[24px] lg:gap-y-[30px]">
                <div className="w-full flex flex-col bg-white rounded-[10px] shadow-md">
                    <div className="flex border-b p-[30px] md:p-[40px] lg:p-[50px] text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
                        {testimonials[indexOfTestimonial].feedback}
                    </div>
                    <div className="flex items-center justify-between px-[30px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[24px] lg:py-[30px]">
                        <div className="flex items-center gap-x-2">
                            <img src={testimonials[indexOfTestimonial].image ? testimonials[indexOfTestimonial].image : "/avatar.png"} alt={testimonials[indexOfTestimonial].name} className="size-[40px] lg:size-[50px] rounded-[10px] object-cover" />
                            <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">{testimonials[indexOfTestimonial].name}</p>
                        </div>
                        <Button variant={"outline"} className="max-w-[143px] h-[36px] md:h-[44px] px-4 md:px-6 py-[14px] md:py-[18px] cursor-pointer bg-[rgba(247,247,248,0.5)] hover:bg-[rgba(247,247,248)]">
                            <span className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Read More</span>
                        </Button>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center md:justify-end">
                    <div className="flex gap-x-2">
                        <Button
                            variant="outline"
                            className="size-[54px] lg:size-[62px] p-[12px] lg:p-[14px] flex items-center justify-center cursor-pointer"
                            onClick={() => setIndexOfTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                        >
                            <ArrowLeft className="size-[20px]" />
                        </Button>
                        <Button
                            variant="outline"
                            className="size-[54px] lg:size-[62px] p-[12px] lg:p-[14px] flex items-center justify-center cursor-pointer"
                            onClick={() => setIndexOfTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                        >
                            <ArrowRight className="size-[20px]" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
