import { Backpack, Book, Dumbbell, BellRing } from 'lucide-react'

export default function Goals() {
    const goals = [
        {
            id: 1,
            title: "Provide Practical Skills",
            description: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
        },
        {
            id: 2,
            title: "Foster Creative Problem-Solving",
            description: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
        },
        {
            id: 3,
            title: "Promote Collaboration and Community",
            description: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
        },
        {
            id: 4,
            title: "Stay Ahead of the Curve",
            description: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
        }
    ]

    return (
        <div className="w-full mt-[50px] md:mt-[100px] flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-[80px]">
            <div className="w-full">
                <h2 className="font-medium text-[24px] md:text-[30px] lg:text-[48px]">Our Goals</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
                    At MathMaze, our primary goal is to empower individuals with the skills and knowledge they need to succeed in the ever-evolving digital landscape. We are committed to providing high-quality, accessible, and engaging educational experiences that inspire lifelong learning and personal growth.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[20px] lg:gap-x-[30px] gap-y-[20px] lg:gap-y-[30px]">
                {goals.map((goal) => (
                    <div key={goal.id} className="flex flex-col p-[30px] md:p-[40px] lg:p-[50px] gap-y-6 lg:gap-y-[30px] bg-white rounded-[10px]">
                        <div className="size-[56px] lg:size-[66px] bg-[#fff9f0] border-[#ffeacc] flex items-center justify-center border rounded-[10px]">
                            {
                                goal.id === 1 ? (
                                    <Backpack className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                ) : (
                                    goal.id === 2 ? (
                                        <Book className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                    ) : (
                                        goal.id === 3 ? (
                                            <Dumbbell className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                        ) : (
                                            <BellRing className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                        )
                                    )
                                )
                            }
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-[18px] md:text-[20px] lg:text-[24px]'>{goal.title}</h2>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">{goal.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
