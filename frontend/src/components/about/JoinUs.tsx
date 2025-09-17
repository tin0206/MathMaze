import { Button } from "../ui/button";

export default function JoinUs() {
  return (
    <div className="w-full rounded-[10px] mt-[50px] md:mt-[80px] p-[30px] md:p-[60px] lg:p-[80px] flex flex-col md:flex-row bg-white gap-y-[20px] md:gap-y-0 mb-[50px] md:mb-[100px]">
        <div className="w-5/6 flex flex-col gap-y-2.5 md:gap-y-[20px]">
            <h2 className="font-semibold text-[#262626] text-[28px] md:text-[38px] lg:text-[48px]">
                <span className="text-[#ff9500]">Together</span>, let's shape the future of digital innovation
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
                Join us on this exciting learning journey and unlock your potential in design and development.
            </p>
        </div>
        <div className="flex items-center md:justify-center">
            <Button className='w-[103px] lg:w-[129px] h-[49px] lg:h-[63px] cursor-pointer bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] text-white font-semibold text-[16px] rounded-[8px] px-5 lg:px-6 py-[14px] lg:py-[18px]'>Join Now</Button>
        </div>
    </div>
  )
}
