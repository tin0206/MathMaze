"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="px-[20px] lg:px-[90px] xl:px-[132px] pb-[50px] max-w-[1800px] w-full bg-white relative z-25">
            <div className="pt-[50px] md:pt-[60px] flex flex-col gap-y-[20px] md:gap-y-[50px] rounded-[10px]">
                <div className="flex flex-col mt-2 gap-y-6 md:gap-y-0 md:flex-row md:gap-x-[50px] lg:gap-x-[40px] xl:gap-x-[200px] max-w-[1596px]">
                    <div className="flex flex-col gap-y-[30px] md:gap-y-10">
                        <Link href="/" className="cursor-pointer size-[50px] md:size-[60px] flex items-center justify-center bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] rounded-[8px]">
                            <img src="/icon.png" alt="Logo" className="size-[30px] md:size-[40px]" />
                        </Link>
                        <ul className="flex flex-col gap-y-5">
                            <li className="flex">
                                <Mail size={24} className="mr-3" />
                                <p className="text-[16px] md:text-[18px] lg:text-[20px]">
                                    support@mathmaze.com
                                </p>
                            </li>
                            <li className="flex">
                                <Phone size={24} className="mr-3" />
                                <p className="text-[16px] md:text-[18px] lg:text-[20px]">
                                    +84 868 744 986
                                </p>
                            </li>
                            <li className="flex">
                                <MapPin size={24} className="mr-3" />
                                <p className="text-[16px] md:text-[18px] lg:text-[20px]">
                                    Somewhere in the World
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[740px] flex flex-col lg:flex-row gap-x-[30px] gap-y-6 lg:gap-y-0">
                        <div className="flex flex-col md:flex-row gap-y-[20px] md:gap-y-0 md:gap-x-[20px] lg:gap-x-[30px] w-2/3">
                            <div className="max-w-[240px] w-2/5 md:w-1/2 flex flex-col gap-y-2.5">
                                <h1 className="text-[20px] font-semibold">Home</h1>
                                <ul>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Benefits</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Our Courses</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Our Testimonials</li>
                                    <li className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">Our FAQ</li>
                                </ul>
                            </div>
                            <div className="max-w-[240px] w-2/5 md:w-1/2 flex flex-col gap-y-2.5">
                                <h1 className="text-[20px] font-semibold">About Us</h1>
                                <ul className="flex flex-col">
                                    <Link href={'/about'} className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a] hover:underline">Company</Link>
                                    <Link href={'/about#achievements'} className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a] hover:underline">Achievements</Link>
                                    <Link href={'/about#goals'} className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a] hover:underline">Our Goals</Link>
                                </ul>
                            </div>
                            <div className="max-w-[240px] w-2/5 md:w-1/2 flex flex-col gap-y-2.5">
                                <h1 className="text-[20px] font-semibold">Our Team</h1>
                                <ul className="flex flex-col">
                                    <Link href={'/contact'} className="text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a] hover:underline">Contact Us</Link>
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
                    <p className="text-[18px] text-[#a1a1a1] text-center">© 2025 MathMaze. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
