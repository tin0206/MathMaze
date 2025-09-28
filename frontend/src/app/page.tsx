import Benefits from "@/components/home/Benefits";
import Courses from "@/components/home/Courses";
import FrequentlyAskedQuestions from "@/components/home/FrequentlyAskedQuestions";
import Header from "@/components/home/Header";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="px-[20px] lg:px-[90px] xl:px-[132px]">
      <Header />
      <Benefits />
      <Courses />
      <Testimonials />
      <FrequentlyAskedQuestions />
    </div> 
  )
}
