import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactForm() {
  return (
    <div className="mt-[50px] md:mt-[80px] lg:mt-[100px] flex flex-col md:flex-row bg-white rounded-[12px] mb-[50px] md:mb-[100px]">
        <div className="md:w-4/6 p-[30px] md:p-[60px] lg:p-[80px] flex flex-col gap-y-[30px] md:gap-y-[40px] lg:gap-y-[50px] md:border-r">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-6 lg:gap-[30px]">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">First Name</h3>
                        <Input type="text" placeholder="Enter First Name" className="w-full h-[50px] lg:h-[58px] px-5 py-5 lg:py-6 rounded-[8px]" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Last Name</h3>
                        <Input type="text" placeholder="Enter Last Name" className="w-full h-[50px] lg:h-[58px] px-5 py-5 lg:py-6 rounded-[8px]" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Email</h3>
                        <Input type="text" placeholder="Enter your Email" className="w-full h-[50px] lg:h-[58px] px-5 py-5 lg:py-6 rounded-[8px]" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Phone</h3>
                        <Input type="text" placeholder="Enter Phone Number" className="w-full h-[50px] lg:h-[58px] px-5 py-5 lg:py-6 rounded-[8px]" />
                    </div>
                </div>
                <div className="mt-[20px] md:mt-[24px] lg:mt-[30px]">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Subject</h3>
                        <Input type="text" placeholder="Enter your Subject" className="w-full h-[50px] lg:h-[58px] px-5 py-5 lg:py-6 rounded-[8px]" />
                    </div>
                </div>
                <div className="mt-[20px] md:mt-[50px] lg:mt-[50px]">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">Message</h3>
                        <textarea placeholder="Enter your Message here..." className="w-full h-[150px] lg:h-[200px] px-5 py-5 lg:py-6 rounded-[8px] border" />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <Button className='w-[298px] md:w-[174px] lg:w-[220px] h-[49px] lg:h-[63px] cursor-pointer bg-[rgba(255,149,0,1)] hover:bg-[rgba(255,149,0,0.8)] text-white font-semibold text-[16px] rounded-[10px] px-5 lg:px-6 py-[14px] lg:py-[18px]'>Send Your Message</Button>
            </div>
        </div>
        <div className="md:w-2/6 p-[30px] lg:p-[60px] flex flex-col items-center gap-y-[20px] md:gap-y-[24px] lg:gap-y-[50px]">
            <div className="w-full p-[30px] border flex flex-col items-center gap-y-[14px] lg:gap-y-[20px] bg-[rgba(252,252,253,1)] rounded-[8px]">
                <div className="w-full flex justify-center">
                    <div className="size-[44px] lg:size-[52px] border flex justify-center items-center bg-[#f7f7f8] rounded-[8px]">
                        <Mail className="size-5 lg:size-6" />
                    </div>
                </div>
                <p className="text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]">support@mathmaze.com</p>
            </div>
            <div className="w-full p-[30px] border flex flex-col items-center gap-y-[14px] lg:gap-y-[20px] bg-[rgba(252,252,253,1)] rounded-[8px]">
                <div className="w-full flex justify-center">
                    <div className="size-[44px] lg:size-[52px] border flex justify-center items-center bg-[#f7f7f8] rounded-[8px]">
                        <Phone className="size-5 lg:size-6" />
                    </div>
                </div>
                <p className="text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]">+84 868 744 986</p>
            </div>
            <div className="w-full p-[30px] border flex flex-col items-center gap-y-[14px] lg:gap-y-[20px] bg-[rgba(252,252,253,1)] rounded-[8px]">
                <div className="w-full flex justify-center">
                    <div className="size-[44px] lg:size-[52px] border flex justify-center items-center bg-[#f7f7f8] rounded-[8px]">
                        <MapPin className="size-5 lg:size-6" />
                    </div>
                </div>
                <p className="text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]">Some Where in the World</p>
            </div>
            <div className="w-full p-[30px] border flex flex-col items-center gap-y-[14px] lg:gap-y-[20px] bg-[rgba(252,252,253,1)] rounded-[8px]">
                <div className="w-full flex justify-center">
                    <ul className="flex gap-x-[14px]">
                        <li className="size-[44px] xl:size-[52px] bg-[#f7f7f8] border flex items-center justify-center rounded-[8px] cursor-pointer">
                            <img src="/facebook.png" alt="" className="size-[20px]" />
                        </li>
                        <li className="size-[44px] xl:size-[52px] bg-[#f7f7f8] border flex items-center justify-center rounded-[8px] cursor-pointer">
                            <img src="/twitter.png" alt=""  className="size-[20px]"/>
                        </li>
                        <li className="size-[44px] xl:size-[52px] bg-[#f7f7f8] border flex items-center justify-center rounded-[8px] cursor-pointer">
                            <img src="/linkedin.png" alt="" className="size-[20px]" />
                        </li>
                    </ul>
                </div>
                <p className="text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]">Social Profiles</p>
            </div>
            
        </div>
    </div>
  )
}
