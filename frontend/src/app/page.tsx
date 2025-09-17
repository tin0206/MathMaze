import Benefits from "@/components/home/Benefits";
import Courses from "@/components/home/Courses";
import FrequentlyAskedQuestions from "@/components/home/FrequentlyAskedQuestions";
import Header from "@/components/home/Header";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Benefits />
      <Courses />
      <Testimonials />
      <FrequentlyAskedQuestions />
    </div> 
  )
}
