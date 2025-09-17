import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
        <div className="px-[20px] lg:px-[90px] xl:px-[132px] pb-[50px]">
            <div className="pt-[50px] md:pt-[60px] flex flex-col gap-y-[20px] md:gap-y-[50px] rounded-[10px]">
                <div className="flex flex-col mt-2 gap-y-6 md:gap-y-0 md:flex-row md:gap-x-[100px] lg:gap-x-[260px] xl:gap-x-[385px] max-w-[1596px]">
                    <div className="flex flex-col gap-y-[30px] md:gap-y-10">
                        <div className="cursor-pointer size-[60px] flex items-center justify-center bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] rounded-[8px]">
                            <img src="/icon.png" alt="Logo" className="size-[40px]" />
                        </div>
                        <ul className="flex flex-col gap-y-5 text-[18px]">
                            <li className="flex">
                                <Mail size={24} className="mr-3" />
                                <p className="text-[18px] md:text-[20px]">
                                    hello@skillbridge.com
                                </p>
                            </li>
                            <li className="flex">
                                <Phone size={24} className="mr-3" />
                                <p className="text-[18px] md:text-[20px]">
                                    +84 868 744 986
                                </p>
                            </li>
                            <li className="flex">
                                <MapPin size={24} className="mr-3" />
                                <p className="text-[18px] md:text-[20px]">
                                    Somewhere in the World
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[740px] flex flex-col md:flex-row gap-x-[30px] gap-y-6 md:gap-y-0">
                        <div className="flex lg:gap-x-[30px] w-2/3">
                            <div className="max-w-[249px] w-2/5 md:w-1/2 flex flex-col gap-y-2.5">
                                <h1 className="text-[20px] font-semibold">Home</h1>
                                <ul>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Benefits</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Our Courses</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Our Testimonials</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Our FAQ</li>
                                </ul>
                            </div>
                            <div className="max-w-[249px] w-2/5 md:w-1/2 flex flex-col gap-y-2.5">
                                <h1 className="text-[20px] font-semibold">About Us</h1>
                                <ul>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Company</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Achievements</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Our Goals</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2.5">
                            <h1 className="text-[20px] font-semibold">Social Profiles</h1>
                            <ul className="flex gap-x-[14px]">
                                <li className="size-[44px] bg-[#f7f7f8] outline-[0.5px] flex items-center justify-center rounded-[6px] hover:bg-[rgba(255,149,0,0.1)] cursor-pointer">
                                    <img src="/facebook.png" alt="" className="size-[20px]" />
                                </li>
                                <li className="size-[44px] bg-[#f7f7f8] outline-[0.5px] flex items-center justify-center rounded-[6px] hover:bg-[rgba(255,149,0,0.1)] cursor-pointer">
                                    <img src="/twitter.png" alt=""  className="size-[20px]"/>
                                </li>
                                <li className="size-[44px] bg-[#f7f7f8] outline-[0.5px] flex items-center justify-center rounded-[6px] hover:bg-[rgba(255,149,0,0.1)] cursor-pointer">
                                    <img src="/linkedin.png" alt="" className="size-[20px]" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-[#f1f1f3]" />
                <div>
                    <p className="text-[18px] text-[#a1a1a1] text-center">© 2025 Skillbridge. All rights reserved.</p>
                </div>
            </div>
        </div>
  )
}
