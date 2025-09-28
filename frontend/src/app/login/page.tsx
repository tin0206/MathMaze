import LoginForm from "@/components/login/LoginForm";
import StudentTestimonials from "@/components/login/StudentTestimonials";

export default function page() {
  return (
    <div className="flex flex-col md:flex-row gap-y-[50px] md:gap-y-0 md:gap-x-[50px] lg:gap-x-[100px] mt-[50px] lg:mt-[100px] mb-[50px] md:mb-[100px] px-[20px] lg:px-[90px] xl:px-[132px]">
      <div className="md:w-3/5 order-2 md:order-1 flex items-center justify-center">
        <StudentTestimonials />
      </div>
      <div className="md:w-3/5 order-1 md:order-2 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  )
}