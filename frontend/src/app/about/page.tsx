import Achievements from "@/components/about/Achievements";
import Goals from "@/components/about/Goals";
import Header from "@/components/about/Header";
import JoinUs from "@/components/about/JoinUs";

export default function page() {
  return (
    <div className="px-[20px] lg:px-[90px] xl:px-[132px]">
        <Header />
        <div id="achievements">
          <Achievements />
        </div>
        <div id="goals">
          <Goals />
        </div>
        <JoinUs />
    </div>
  )
}
