import { Crown, Medal, Drama, Shield } from 'lucide-react'

export default function Achievements() {
    const achievements = [
        {
            id: 1,
            title: "Trusted by Thousands",
            description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
        },
        {
            id: 2,
            title: "Award-Winning Courses",
            description: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
        },
        {
            id: 3,
            title: "Positive Student Feedback",
            description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
        },
        {
            id: 4,
            title: "Industry Partnerships",
            description: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
        }
    ]

    return (
        <div className="w-full mt-[50px] md:mt-[100px] flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-[80px]">
            <div className="w-full">
                <h2 className="font-medium text-[24px] md:text-[30px] lg:text-[48px]">Achievements</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
                    Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[20px] lg:gap-x-[30px] gap-y-[20px] lg:gap-y-[30px]">
                {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex flex-col p-[30px] md:p-[40px] lg:p-[50px] gap-y-6 lg:gap-y-[30px] bg-white rounded-[10px]">
                        <div className="size-[56px] lg:size-[66px] bg-[#fff9f0] border-[#ffeacc] flex items-center justify-center border rounded-[10px]">
                            {
                                achievement.id === 1 ? (
                                    <Crown className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                ) : (
                                    achievement.id === 2 ? (
                                        <Medal className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                    ) : (
                                        achievement.id === 3 ? (
                                            <Drama className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                        ) : (
                                            <Shield className="size-[28px] lg:size-[34px] text-[#ff9500]" />
                                        )
                                    )
                                )
                            }
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <h2 className='font-medium text-[18px] md:text-[20px] lg:text-[24px]'>{achievement.title}</h2>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
