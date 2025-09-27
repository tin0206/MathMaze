"use client"

import { useSearchParams } from "next/navigation";
import ResetPasswordForm from "@/components/reset-password/ResetPasswordForm";
import StudentTestimonials from "@/components/reset-password/StudentTestimonials";

export default function page() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const email = searchParams.get("email")

  return (
      <div className="flex flex-col md:flex-row gap-y-[50px] md:gap-y-0 md:gap-x-[50px] lg:gap-x-[100px] mt-[50px] lg:mt-[100px] mb-[50px] md:mb-[100px]">
        <div className="md:w-3/5 order-2 md:order-1 flex items-center justify-center">
          <StudentTestimonials />
        </div>
        <div className="md:w-3/5 order-1 md:order-2 flex items-center justify-center">
          <ResetPasswordForm token={token} email={email} />
        </div>
      </div>
    )
}
