"use client"

import { Zap } from 'lucide-react'
import { Button } from '../ui/button'

export default function Header() {

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="mt-[50px] md:mt-[100px] flex flex-col items-center justify-center rounded-[10px] border-[0.5px] border-gray-100 bg-white shadow-sm pr-6">
        <div className="h-[74px] md:h-[90px] flex items-center gap-x-2.5">
          <div className='size-[48px] md:size-[62px] flex items-center justify-center bg-[#fff4e5] rounded-[6px] ml-[14px] md:ml-5'>
            <Zap className='size-[24px] md:size-[34px]' />
          </div>
          <p className='text-[22px] md:text-[36px] lg:text-[48px] font-semibold'>
            <span className='text-[#ff9500]'>Unlock</span> Your Creative Potential
          </p>
        </div>
      </div>
      <div className='mt-4 lg:mt-5'>
        <p className='text-[24px] md:text-[28px] lg:text-[38px] font-medium'>with Online Design and Development Courses.</p>
        <p className='w-full flex items-center justify-center text-[14px] md:text-[16px] lg:text-[18px]'>Learn from Industry Experts and Enhance Your Skills.</p>
      </div>
      <div className='mt-[50px] flex justify-center lg:mt-[60px] w-[293px] lg:w-[366px] h-[49px] lg:h-[63px]'>
        <Button className='h-full w-[154px] lg:w-[195px] cursor-pointer bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] text-white font-semibold text-[16px] rounded-[6px] px-5 py-[14px]'>Explore Courses</Button>
      </div>
      <div className="mt-[100px] flex items-center justify-center w-full rounded-[12px]">
        <img src="/top.webp" alt="Header Image" className='w-4/5 h-auto' />
      </div>
    </div>
  )
}
