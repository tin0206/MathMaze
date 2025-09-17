import { Button } from "../ui/button"
import Link from 'next/link'

export default function Courses() {
    const courses = [
        {
            id: 1,
            title: "Arithmetic Foundations",
            author: "John Smith",
            description: "Learn the building blocks of mathematics. This course covers numbers, operations, fractions, decimals, and percentages through simple explanations and practical examples. Perfect for beginners who want to strengthen their core math skills.",
            images: [],
            time: "25 hours",
            level: "Beginner",
        },
        {
            id: 2,
            title: "Geometry Basics",
            author: "Jane Doe",
            description: "Discover the shapes and structures of the world around us. From angles and triangles to circles and 3D solids, this course builds spatial reasoning and problem-solving skills with visual, interactive lessons.",
            images: [],
            time: "18 hours",
            level: "Beginner",
        },
        {
            id: 3,
            title: "Algebra I",
            author: "Emily Johnson",
            description: "Transition from numbers to symbols. This course teaches you how to work with variables, solve equations, draw graphs, and understand functions—the foundation of higher mathematics and computer science.",
            images: [],
            time: "33 hours",
            level: "Intermediate",
        },
        {
            id: 4,
            title: "Calculus I",
            author: "Michael Brown",
            description: "Understand change and motion through limits, derivatives, and integrals. This course connects algebra and geometry to real-world applications like physics, economics, and biology.",
            images: [],
            time: "33 hours",
            level: "Upper Intermediate",
        },
        {
            id: 5,
            title: "Probability & Statistics",
            author: "Sarah Wilson",
            description: "Explore the world of data analysis and interpretation. This course covers key concepts in probability, descriptive statistics, and inferential statistics, equipping you with the skills to make data-driven decisions.",
            images: [],
            time: "40 hours",
            level: "Advanced",
        },
        {
            id: 6,
            title: "Number Theory",
            author: "David Lee",
            description: "Dive into the properties and relationships of numbers. This course covers prime numbers, divisibility, modular arithmetic, and more, providing a strong foundation for cryptography and advanced mathematical studies.",
            images: [],
            time: "30 hours",
            level: "Optional Advanced",
        }
    ]

    return (
        <div className="mt-[50px] md:mt-[100px] flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px]">
            <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-[250px] lg:gap-x-[300px]">
                <div className="md:w-3/4">
                    <h1 className="font-semibold text-[28px] md:text-[38px] lg:text-[48px]">Our Courses</h1>
                    <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">Explore our diverse range of math courses designed to enhance your skills and confidence.</p>
                </div>
                <div className="md:w-1/4 flex items-start md:justify-end md:items-end">
                    <Button variant={"outline"} className="w-[96px] lg:w-[120px] h-[49px] lg:h-[63px] px-5 py-[14px] rounded-[8px] font-medium text-[18px] cursor-pointer">
                        <Link href="/courses">See All</Link>
                    </Button>
                </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-x-[30px] md:gap-y-[30px]">
                {courses.map((course) => (
                    <li key={course.id} className="p-6 md:p-[45px] flex flex-col bg-[#ffffff] rounded-[10px] gap-y-[24px] md:gap-y-[30px]">
                        <div className="w-full flex items-center justify-center">
                            <img src={course.images.length > 0 ? course.images[0] : "/placeholder.png"} alt={course.title} className="max-h-[500px] rounded-[10px]" />
                        </div>
                        <div className="w-full flex items-center">
                            <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-y-3 lg:gap-y-0">
                                <div className="flex gap-x-2">
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.time}</Button>
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.level}</Button>
                                </div>
                                <div>
                                    <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">By {course.author}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h2 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px]">{course.title}</h2>
                            <p className="text-[14px] text-[#656567] md:text-[16px] lg:text-[18px]">{course.description}</p>
                        </div>
                        <Button variant={"outline"} className="h-[49px] lg:h-[63px] px-6 py-[14px] md:py-[18px] cursor-pointer bg-[rgba(247,247,248,0.5)] hover:bg-[rgba(247,247,248)]">
                            <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium">Start Course</span>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
