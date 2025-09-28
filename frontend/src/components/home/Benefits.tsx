import { Button } from "../ui/button";
import { MoveUpRight } from 'lucide-react'

export default function Benefits() {
    const benefits = [
        {
            id: 1,
            title: "Improves Logical Thinking",
            description: "Math trains you to follow step-by-step reasoning and spot flaws in arguments."
        },
        {
            id: 2,
            title: "Boosts Problem-Solving Skills",
            description: "You learn how to break big problems into smaller, manageable parts."
        },
        {
            id: 3,
            title: "Strengthens Memory and Focus",
            description: "Working with formulas, theorems, and multi-step problems builds concentration."
        },
        {
            id: 4,
            title: "Encourages Creativity",
            description: "Math isn't just numbers; it involves finding clever shortcuts and elegant solutions."
        },
        {
            id: 5,
            title: "Develops Persistence",
            description: "Solving tough math problems teaches resilience and patience."
        },
        {
            id: 6,
            title: "Universal Language",
            description: "Math connects people across cultures, since equations and logic are the same everywhere."
        }
    ]

  return (
    <div className="mt-[50px] md:mt-[100px] flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px]">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-[250px] lg:gap-x-[300px]">
            <div className="md:w-3/4">
                <h1 className="font-semibold text-[28px] md:text-[38px] lg:text-[48px]">Benefits</h1>
                <p className=" text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">Learning math isn't just about numbers — it's about sharpening your mind and gaining tools that apply to almost every part of life.</p>
            </div>
            <div className="md:w-1/4 flex items-start md:justify-end md:items-end">
                <Button variant={"outline"} className="w-[96px] lg:w-[120px] h-[49px] lg:h-[63px] px-5 py-[14px] rounded-[8px] font-medium text-[18px] cursor-pointer">View All</Button>
            </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
            {benefits.map((benefit) => (
                <li key={benefit.id} className="flex flex-col bg-[#ffffff] rounded-[10px] gap-y-[30px] md:gap-y-10 lg:gap-y-[50px] p-[30px] md:p-10 lg:p-[50px]">
                    <div className="w-full flex justify-end">
                        <h2 className="font-bold text-[50px] md:text-[60px] lg:text-[80px]">{`0${benefit.id}`}</h2>
                    </div>
                    <div className="h-2/3">
                        <h3 className="font-semibold text-[18px] lg:text-[20px] mb-1">{benefit.title}</h3>
                        <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">{benefit.description}</p>
                    </div>
                    <div className="w-full flex justify-end">
                        <Button variant={"outline"} className="size-[54px] p-[14px] rounded-[8px] cursor-pointer">
                            <MoveUpRight className="size-[26px] text-[#ff9500]" />
                        </Button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
