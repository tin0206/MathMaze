export default function Header() {
  return (
    <div className="w-full">
      <div className="mt-[50px] md:mt-[80px] lg:mt-[110px] w-full flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[80px] lg:gap-x-[100px] pb-[30px] md:pb-[40px] lg:pb-[50px]">
        <h1 className="md:w-2/5 text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-[34px] md:leading-[44px] lg:leading-[58px]">
          About MathMaze
        </h1>
          <p className="md:w-2/5 text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
            MathMaze is an innovative online platform dedicated to making learning mathematics engaging and accessible for students of all ages. Our mission is to empower learners with the skills and confidence they need to excel in math through interactive courses, real-world applications, and a supportive community.
          </p>
      </div>
      <hr className="border-gray-200" />
    </div>
  )
}
