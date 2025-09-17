export default function Header() {
  return (
    <div className="mt-[50px] md:mt-[80px] lg:mt-[110px] w-full flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[80px] lg:gap-x-[100px] pb-[30px] md:pb-[40px] lg:pb-[50px]">
        <h1 className="md:w-2/5 text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-[34px] md:leading-[44px] lg:leading-[58px]">
            Online Courses on Math
        </h1>
        <p className="md:w-2/5 text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">
            Welcome to our online course page, where you can enhance your skills in mathematics. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
        </p>
    </div>
  )
}
