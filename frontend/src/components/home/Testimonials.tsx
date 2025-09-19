"use client"

import { useTestimonials } from "@/store/useTestimonials";
import { Button } from "../ui/button";

export default function Testimonials() {
  const { testimonials } = useTestimonials()

  return (
    <div className="mt-[50px] md:mt-[100px] flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px]">
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-[250px] lg:gap-x-[300px]">
        <div className="md:w-3/4">
          <h1 className="font-semibold text-[28px] md:text-[38px] lg:text-[48px]">Our Testimonials</h1>
          <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">Explore our diverse range of testimonials from students who have improved their math skills and confidence.</p>
        </div>
        <div className="md:w-1/4 flex items-start md:justify-end md:items-end">
          <Button variant={"outline"} className="w-[96px] lg:w-[120px] h-[49px] lg:h-[63px] px-5 py-[14px] rounded-[8px] font-medium text-[18px] cursor-pointer">View All</Button>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-x-[30px] md:gap-y-[30px]">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="flex flex-col bg-[#ffffff] rounded-[10px]">
            <div className="p-[30px] md:p-[40px] lg:p-[50px] text-[#4c4c4d] text-[14px] md:text-[16px] lg:text-[18px]">
              {testimonial.feedback}
            </div>
            <div className="flex items-center justify-between px-[30px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[24px] lg:py-[30px]">
              <div className="flex items-center gap-x-2">
                <img src={testimonial.image ? testimonial.image : "/avatar.png"} alt={testimonial.name} className="size-[40px] lg:size-[50px] rounded-[10px] object-cover" />
                <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">{testimonial.name}</p>
              </div>
              <Button variant={"outline"} className="max-w-[182px] h-[36px] md:h-[44px] px-4 md:px-6 py-[14px] md:py-[18px] cursor-pointer bg-[rgba(247,247,248,0.5)] hover:bg-[rgba(247,247,248)]">
                <span className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Read Full Story</span>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
