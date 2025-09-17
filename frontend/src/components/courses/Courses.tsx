import { Button } from "../ui/button"

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
            curriculum: [
                { module: "Introduction to Numbers", content: "Whole numbers, integers, and place value" },
                { module: "Basic Operations", content: "Addition, subtraction, multiplication, division" },
                { module: "Fractions", content: "Understanding parts of a whole, equivalent fractions" },
                { module: "Decimals", content: "Converting fractions, comparing and rounding decimals" },
                { module: "Percentages", content: "Conversions between fractions/decimals/percents" },
                { module: "Word Problems", content: "Applying arithmetic to everyday scenarios" },
            ],
        },
        {
            id: 2,
            title: "Geometry Basics",
            author: "Jane Doe",
            description: "Discover the shapes and structures of the world around us. From angles and triangles to circles and 3D solids, this course builds spatial reasoning and problem-solving skills with visual, interactive lessons.",
            images: [],
            time: "18 hours",
            level: "Beginner",
            curriculum: [
                { module: "Introduction to Geometry", content: "Points, lines, and planes" },
                { module: "Angles", content: "Types of angles and angle relationships" },
                { module: "Triangles", content: "Properties, congruence, and similarity" },
                { module: "Quadrilaterals & Polygons", content: "Shapes, perimeter, and area" },
                { module: "Circles", content: "Radius, diameter, circumference, and area" },
                { module: "3D Solids", content: "Prisms, cylinders, cones, and spheres" },
            ],
        },
        {
            id: 3,
            title: "Algebra I",
            author: "Emily Johnson",
            description: "Transition from numbers to symbols. This course teaches you how to work with variables, solve equations, draw graphs, and understand functions—the foundation of higher mathematics and computer science.",
            images: [],
            time: "33 hours",
            level: "Intermediate",
            curriculum: [
                { module: "Introduction to Algebra", content: "Variables and expressions" },
                { module: "Equations", content: "Linear equations, inequalities, and solutions" },
                { module: "Graphing", content: "Coordinate plane and linear functions" },
                { module: "Polynomials", content: "Addition, subtraction, and multiplication" },
                { module: "Factoring", content: "Techniques for solving quadratic equations" },
                { module: "Functions", content: "Understanding and interpreting functions" },
            ],
        },
        {
            id: 4,
            title: "Calculus I",
            author: "Michael Brown",
            description: "Understand change and motion through limits, derivatives, and integrals. This course connects algebra and geometry to real-world applications like physics, economics, and biology.",
            images: [],
            time: "33 hours",
            level: "Upper Intermediate",
            curriculum: [
                { module: "Limits & Continuity", content: "Concept of limits, continuity of functions" },
                { module: "Derivatives", content: "Definition, rules, and applications" },
                { module: "Applications of Derivatives", content: "Optimization and related rates" },
                { module: "Integrals", content: "Antiderivatives and definite integrals" },
                { module: "Applications of Integrals", content: "Area, volume, and physics problems" },
                { module: "Fundamental Theorem of Calculus", content: "Linking derivatives and integrals" },
            ],
        },
        {
            id: 5,
            title: "Probability & Statistics",
            author: "Sarah Wilson",
            description: "Explore the world of data analysis and interpretation. This course covers key concepts in probability, descriptive statistics, and inferential statistics, equipping you with the skills to make data-driven decisions.",
            images: [],
            time: "40 hours",
            level: "Advanced",
            curriculum: [
                { module: "Introduction to Data", content: "Types of data and data collection methods" },
                { module: "Descriptive Statistics", content: "Mean, median, mode, variance, standard deviation" },
                { module: "Probability", content: "Basic probability rules, conditional probability" },
                { module: "Distributions", content: "Normal, binomial, and other common distributions" },
                { module: "Inferential Statistics", content: "Confidence intervals and hypothesis testing" },
                { module: "Regression & Correlation", content: "Linear regression and correlation analysis" },
            ],
        },
        {
            id: 6,
            title: "Number Theory",
            author: "David Lee",
            description: "Dive into the properties and relationships of numbers. This course covers prime numbers, divisibility, modular arithmetic, and more, providing a strong foundation for cryptography and advanced mathematical studies.",
            images: [],
            time: "30 hours",
            level: "Optional Advanced",
            curriculum: [
                { module: "Introduction to Number Theory", content: "History and applications" },
                { module: "Divisibility & Primes", content: "Divisibility rules, prime factorization" },
                { module: "Greatest Common Divisor", content: "Euclidean algorithm" },
                { module: "Congruences", content: "Modular arithmetic and applications" },
                { module: "Number Theoretic Functions", content: "Euler’s totient function" },
                { module: "Cryptography Applications", content: "RSA and modern encryption basics" },
            ],
        }
    ]

    return (
        <div className="mt-[50px] md:mt-[100px] flex flex-col gap-y-[20px] md:gap-y-[40px] lg:gap-y-[50px] mb-[50px] md:mb-[100px]">
            {courses.map((course) => (
                <div key={course.id} className="p-6 md:p-10 lg:p-[50px] flex flex-col gap-y-[40px] lg:gap-y-[50px] bg-white rounded-[10px]">
                    <div className="flex flex-col gap-y-6 lg:gap-y-[30px]">
                        <div className="w-full flex flex-col md:flex-row md:gap-x-[50px] gap-y-[20px] md:gap-y-0 items-center">
                            <div>
                                <h2 className="font-semibold text-[18px] md:text-[20px] lg:text-[24px]">{course.title}</h2>
                                <p className="mt-1 text-[14px] md:text-[16px] lg:text-[18px] text-[#59595a]">{course.description}</p>
                            </div>
                            <Button variant={"outline"} className="w-[119px] lg:w-[160px] h-[49px] lg:h-[63px] px-[16px] py-[14px] rounded-[8px] font-medium text-[18px] cursor-pointer">View Course</Button>
                        </div>
                        {course.images.length > 0 ? (
                            <div className={`grid grid-cols-${course.images.length} gap-x-4`}>
                                {course.images.map((img, index) => (
                                    <img key={index} src={img} alt={`Course Image ${index + 1}`} className="rounded-[8px]" />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-x-4">
                                <img src="/placeholder.png" alt="" className="rounded-[8px]" />
                                <img src="/placeholder.png" alt="" className="rounded-[8px]" />
                                <img src="/placeholder.png" alt="" className="rounded-[8px]" />
                            </div>
                        )}
                        <div className="w-full flex items-center">
                            <div className="flex flex-col md:flex-row w-full justify-between md:items-center gap-y-3 md:gap-y-0">
                                <div className="flex gap-x-2">
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.time}</Button>
                                    <Button variant={"outline"} className="text-[14px] text-[#656567] hover:text-[#656567] md:text-[16px] lg:text-[18px] px-[14px] md:px-4 py-2 md:py-[10px] rounded-[8px] hover:bg-[#ffffff]">{course.level}</Button>
                                </div>
                                <div>
                                    <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">By {course.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg">
                        <div>
                            <h2 className="font-semibold text-[16px] md:text-[18px] lg:text-[22px] px-5 md:px-6 lg:px-[30px] py-[14px] border-b md:py-5 lg:py-6">Curriculum</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {course.curriculum.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:px-[40px] lg:px-[50px] items-center justify-center p-6 border-r border-b`} 
                                >
                                    <div className="w-full">
                                        <h3 className="text-[30px] md:text-[40px] lg:text-[50px] font-extrabold">{String(index + 1).padStart(2, "0")}</h3>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-2 text-[#2f2f2f]">{item.module}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
