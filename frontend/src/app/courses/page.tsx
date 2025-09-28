import Courses from "@/components/courses/Courses";
import Header from "@/components/courses/Header";

export default function page() {
  return (
    <div className="px-[20px] lg:px-[90px] xl:px-[132px]">
      <Header />
      <Courses />
    </div>
  )
}
