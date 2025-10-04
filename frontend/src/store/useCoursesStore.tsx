import { Course } from "@/app/model"
import { create } from "zustand"

interface CourseState {
    courses: Course[]
    setCourses: (courses: Course[]) => void
    getCourseByName: (name: string) => Course | undefined
}

export const useCoursesStore = create<CourseState>((set, get) => ({
    courses: [
        {
            id: 1,
            title: "Arithmetic Foundations",
            author: "John Smith",
            description: "Learn the building blocks of mathematics. This course covers numbers, operations, fractions, decimals, and percentages through simple explanations and practical examples. Perfect for beginners who want to strengthen their core math skills.",
            brief: `Mathematics is the foundation of logical thinking and problem solving.
                It teaches you how to analyze patterns and structure.

                This course begins with simple arithmetic and gradually introduces complex topics.
                You will not only learn the formulas, but also the intuition behind them.

                Through examples and exercises, you will gain confidence step by step.
                Every chapter is designed to be practical and engaging.

                By the end of this course, you will have the skills to approach mathematics with clarity.
                Whether you are a beginner or refreshing your knowledge, this course will benefit you.`,
            requisites: [
                "No prior math knowledge required",
                "Basic reading and writing skills",
            ],
            images: [],
            time: "25 hours",
            level: "Beginner",
            curriculum: [
                { 
                    module: "Introduction to Numbers", 
                    content: "Whole numbers, integers, and place value",
                    chapters: [
                        { title: "Counting Numbers", content: "Introduction to natural numbers", time: "1 hour" },
                        { title: "Place Value System", content: "Units, tens, hundreds, etc.", time: "1 hour 30 min" },
                        { title: "Integers", content: "Positive and negative numbers", time: "1 hour 30 min" },
                        { title: "Number Line", content: "Visual representation of numbers", time: "1 hour" }
                    ]
                },
                { 
                    module: "Basic Operations", 
                    content: "Addition, subtraction, multiplication, division",
                    chapters: [
                        { title: "Addition Basics", content: "Step-by-step with examples", time: "1 hour" },
                        { title: "Subtraction Basics", content: "Simple subtraction problems", time: "1 hour" },
                        { title: "Multiplication", content: "Repeated addition concept", time: "1 hour 30 min" },
                        { title: "Division", content: "Sharing and grouping", time: "1 hour 30 min" },
                        { title: "Order of Operations", content: "Using PEMDAS", time: "1 hour" }
                    ]
                },
                { 
                    module: "Fractions", 
                    content: "Understanding parts of a whole, equivalent fractions",
                    chapters: [
                        { title: "Introduction to Fractions", content: "Parts of a whole", time: "1 hour" },
                        { title: "Equivalent Fractions", content: "Simplifying fractions", time: "1 hour 30 min" },
                        { title: "Comparing Fractions", content: "Greater, lesser, equal", time: "1 hour" },
                        { title: "Adding & Subtracting Fractions", content: "Finding common denominators", time: "1 hour 30 min" },
                        { title: "Multiplying & Dividing Fractions", content: "Step-by-step methods", time: "1 hour" }
                    ]
                },
                { 
                    module: "Decimals", 
                    content: "Converting fractions, comparing and rounding decimals",
                    chapters: [
                        { title: "Decimal Basics", content: "Tenths, hundredths", time: "1 hour" },
                        { title: "Fraction to Decimal", content: "Converting step-by-step", time: "1 hour" },
                        { title: "Comparing Decimals", content: "Ordering values", time: "1 hour" },
                        { title: "Rounding Decimals", content: "Approximation techniques", time: "1 hour" }
                    ]
                },
                { 
                    module: "Percentages", 
                    content: "Conversions between fractions/decimals/percents",
                    chapters: [
                        { title: "Percent Basics", content: "Meaning of percent", time: "1 hour" },
                        { title: "Fractions to Percents", content: "Conversions with examples", time: "1 hour" },
                        { title: "Decimals to Percents", content: "Step-by-step conversion", time: "1 hour" },
                        { title: "Percentage Applications", content: "Discounts, increase/decrease", time: "2 hours" }
                    ]
                },
                { 
                    module: "Word Problems", 
                    content: "Applying arithmetic to everyday scenarios",
                    chapters: [
                        { title: "Simple Applications", content: "Daily life examples", time: "1 hour" },
                        { title: "Money Problems", content: "Budgeting and cost", time: "1 hour" },
                        { title: "Measurement Problems", content: "Length, weight, volume", time: "1 hour 30 min" },
                        { title: "Mixed Word Problems", content: "Combined operations", time: "1 hour 30 min" }
                    ]
                },
            ],
            language: ["English"],
            price: 20,
            updated_date: "01-10-2024",
        },
        {
            id: 2,
            title: "Geometry Basics",
            author: "Jane Doe",
            description: "Discover the shapes and structures of the world around us. From angles and triangles to circles and 3D solids, this course builds spatial reasoning and problem-solving skills with visual, interactive lessons.",
            brief: "Dive into the world of shapes, sizes, and spaces with a course designed to strengthen visual thinking and logical reasoning. You’ll explore the properties of triangles, circles, polygons, and 3D solids while learning to calculate angles, areas, and volumes. The combination of theory and interactive problem-solving makes geometry both approachable and engaging for beginners.",
            requisites: [
                "Basic arithmetic knowledge (addition, subtraction, multiplication, division)",
                "Curiosity about shapes and space",
            ],
            images: [],
            time: "18 hours",
            level: "Beginner",
            curriculum: [
                { 
                    module: "Introduction to Geometry", 
                    content: "Points, lines, and planes", 
                    chapters: [
                        { title: "Basic Definitions", content: "Understanding points, lines, and planes", time: "1 hour" },
                        { title: "Line Segments & Rays", content: "Differences and properties", time: "1 hour" },
                        { title: "Angles Overview", content: "Types of angles", time: "1 hour" },
                        { title: "Measuring Angles", content: "Using a protractor", time: "1 hour" }
                    ]
                },
                { 
                    module: "Angles", 
                    content: "Types of angles and angle relationships",
                    chapters: [
                        { title: "Angle Relationships", content: "Complementary and supplementary angles", time: "1 hour" },
                        { title: "Transversals", content: "Angles formed by a transversal", time: "1 hour" }
                    ]
                },
                { 
                    module: "Triangles", 
                    content: "Properties, congruence, and similarity",
                    chapters: [
                        { title: "Triangle Basics", content: "Types of triangles", time: "1 hour" },
                        { title: "Congruence", content: "Criteria for triangle congruence", time: "1 hour" },
                        { title: "Similarity", content: "Criteria for triangle similarity", time: "1 hour" }
                    ]
                },
                { 
                    module: "Quadrilaterals & Polygons", 
                    content: "Shapes, perimeter, and area",
                    chapters: [
                        { title: "Quadrilateral Basics", content: "Types of quadrilaterals", time: "1 hour" },
                        { title: "Perimeter & Area", content: "Formulas for perimeter and area", time: "1 hour" },
                        { title: "Other Polygons", content: "Properties of polygons", time: "1 hour" }
                    ]
                },
                { 
                    module: "Circles", 
                    content: "Radius, diameter, circumference, and area",
                    chapters: [
                        { title: "Circle Basics", content: "Understanding circles", time: "1 hour" },
                        { title: "Circumference", content: "Formulas for circumference", time: "1 hour" },
                        { title: "Area", content: "Formulas for area", time: "1 hour" }
                    ]
                },
                { 
                    module: "3D Solids", 
                    content: "Prisms, cylinders, cones, and spheres",
                    chapters: [
                        { title: "3D Shapes Overview", content: "Understanding 3D shapes", time: "1 hour" },
                        { title: "Surface Area", content: "Formulas for surface area", time: "1 hour" },
                        { title: "Volume", content: "Formulas for volume", time: "1 hour" }
                    ]
                },
            ],
            language: ["English"],
            price: 20,
            updated_date: "18-11-2025",
        },
        {
            id: 3,
            title: "Algebra 1",
            author: "Emily Johnson",
            description: "Transition from numbers to symbols. This course teaches you how to work with variables, solve equations, draw graphs, and understand functions—the foundation of higher mathematics and computer science.",
            brief: "Algebra 1 is the gateway to higher-level mathematics, bridging the gap between arithmetic and advanced concepts. You’ll learn how to use symbols and variables to represent unknowns, solve linear equations, and understand graphing as a tool for visualization. With a strong emphasis on real-world applications, this course equips you with problem-solving skills that extend beyond the classroom.",
            requisites: [
                "Strong understanding of arithmetic operations",
                "Familiarity with fractions, decimals, and percentages",
            ],
            images: [],
            time: "33 hours",
            level: "Intermediate",
            curriculum: [
                { 
                    module: "Introduction to Algebra", 
                    content: "Variables and expressions",
                    chapters: [
                        { title: "Understanding Variables", content: "What are variables?", time: "1 hour" },
                        { title: "Algebraic Expressions", content: "Building and interpreting expressions", time: "1 hour 30 min" },
                        { title: "Simplifying Expressions", content: "Combining like terms", time: "1 hour 30 min" },
                        { title: "Evaluating Expressions", content: "Substituting values for variables", time: "1 hour" },
                        { title: "Properties of Operations", content: "Commutative, associative, distributive", time: "1 hour" },
                        { title: "Translating Words to Expressions", content: "From verbal phrases to algebraic expressions", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Equations", 
                    content: "Linear equations, inequalities, and solutions",
                    chapters: [
                        { title: "Solving Linear Equations", content: "One-step and multi-step equations", time: "1 hour 30 min" },
                        { title: "Inequalities", content: "Solving and graphing inequalities", time: "1 hour 30 min" },
                        { title: "Systems of Equations", content: "Graphical and algebraic solutions", time: "2 hours" },
                        { title: "Word Problems", content: "Setting up and solving equations from word problems", time: "2 hours" }
                    ]
                },
                { 
                    module: "Graphing", 
                    content: "Coordinate plane and linear functions",
                    chapters: [
                        { title: "Coordinate Plane Basics", content: "X and Y axes", time: "1 hour" },
                        { title: "Plotting Points", content: "How to plot points", time: "1 hour" },
                        { title: "Graphing Linear Equations", content: "Using slope and intercept", time: "1 hour 30 min" },
                        { title: "Interpreting Graphs", content: "Understanding graph features", time: "1 hour" },
                        { title: "Slope of a Line", content: "Calculating and interpreting slope", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Polynomials", 
                    content: "Addition, subtraction, and multiplication",
                    chapters: [
                        { title: "Polynomial Basics", content: "Terms, degree, and standard form", time: "1 hour" },
                        { title: "Adding & Subtracting Polynomials", content: "Combining like terms", time: "1 hour 30 min" },
                        { title: "Multiplying Polynomials", content: "Distributive property and FOIL", time: "1 hour 30 min" },
                        { title: "Special Products", content: "Square of a binomial, difference of squares", time: "1 hour" }
                    ]
                },
                { 
                    module: "Factoring", 
                    content: "Techniques for solving quadratic equations",
                    chapters: [
                        { title: "Greatest Common Factor", content: "Factoring out the GCF", time: "1 hour" },
                        { title: "Factoring Trinomials", content: "Standard methods", time: "1 hour 30 min" },
                        { title: "Factoring by Grouping", content: "When and how to use it", time: "1 hour 30 min" },
                        { title: "Solving Quadratics by Factoring", content: "Finding roots", time: "1 hour" },
                        { title: "Special Cases", content: "Difference of squares, perfect square trinomials", time: "1 hour" }
                    ]
                },
                { 
                    module: "Functions", 
                    content: "Understanding and interpreting functions",
                    chapters: [
                        { title: "Function Basics", content: "Definition and notation", time: "1 hour" },
                        { title: "Evaluating Functions", content: "Substituting values", time: "1 hour" },
                        { title: "Function Graphs", content: "Visual representation", time: "1 hour 30 min" },
                        { title: "Types of Functions", content: "Linear, quadratic, and more", time: "1 hour 30 min" },
                        { title: "Function Transformations", content: "Shifts, stretches, and reflections", time: "1 hour 30 min" }
                    ]
                },
            ],
            language: ["English"],
            price: 25,
            updated_date: "15-12-2024",
        },
        {
            id: 4,
            title: "Calculus 1",
            author: "Michael Brown",
            description: "Understand change and motion through limits, derivatives, and integrals. This course connects algebra and geometry to real-world applications like physics, economics, and biology.",
            brief: "Calculus 1 is a foundational course that introduces the concepts of limits, derivatives, and integrals. You’ll learn how to analyze change and motion, connecting algebraic and geometric perspectives. With applications in physics, economics, and biology, this course provides a practical understanding of calculus principles that are essential for advanced studies in mathematics and science.",
            requisites: [
                "Strong proficiency in Algebra 1 and Geometry",
                "Familiarity with functions and graphing",
                "Basic understanding of trigonometry is a plus",
                "Willingness to engage with challenging concepts",
            ],
            images: [],
            time: "33 hours",
            level: "Upper Intermediate",
            curriculum: [
                { 
                    module: "Limits & Continuity", 
                    content: "Concept of limits, continuity of functions", 
                    chapters: [
                        { title: "Understanding Limits", content: "Intuitive and formal definitions", time: "1 hour 30 min" },
                        { title: "Calculating Limits", content: "Techniques and examples", time: "1 hour 30 min" },
                        { title: "Continuity", content: "What it means for a function to be continuous", time: "1 hour" }
                    ]
                },
                { 
                    module: "Derivatives", 
                    content: "Definition, rules, and applications",
                    chapters: [
                        { title: "Definition of Derivative", content: "Rate of change and slope of tangent", time: "1 hour 30 min" },
                        { title: "Basic Derivative Rules", content: "Power, product, quotient rules", time: "2 hours" },
                        { title: "Higher-Order Derivatives", content: "Second and third derivatives", time: "1 hour" }
                    ]
                },
                { 
                    module: "Applications of Derivatives", 
                    content: "Optimization and related rates",
                    chapters: [
                        { title: "Critical Points", content: "Finding and classifying", time: "1 hour 30 min" },
                        { title: "Optimization Problems", content: "Maxima and minima in real-world contexts", time: "2 hours" },
                        { title: "Related Rates", content: "Solving problems involving rates of change", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Integrals", 
                    content: "Antiderivatives and definite integrals", 
                    chapters: [
                        { title: "Indefinite Integrals", content: "Basic antiderivative rules", time: "1 hour 30 min" },
                        { title: "Definite Integrals", content: "Area under a curve", time: "1 hour 30 min" },
                        { title: "Techniques of Integration", content: "Substitution method", time: "1 hour 30 min"},
                        { title: "Properties of Integrals", content: "Linearity and additivity", time: "1 hour" }
                    ]
                },
                { 
                    module: "Applications of Integrals", 
                    content: "Area, volume, and physics problems",
                    chapters: [
                        { title: "Area Between Curves", content: "Using integrals to find area", time: "1 hour 30 min" },
                        { title: "Volume of Solids of Revolution", content: "Disk and shell methods", time: "2 hours" },
                        { title: "Work and Energy Applications", content: "Using integrals in physics", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Fundamental Theorem of Calculus", 
                    content: "Linking derivatives and integrals",
                    chapters: [
                        { title: "First Part", content: "Relationship between differentiation and integration", time: "1 hour" },
                        { title: "Second Part", content: "Evaluating definite integrals", time: "1 hour" }
                    ]
                },
            ],
            language: ["English"],
            price: 30,
            updated_date: "20-01-2025",
        },
        {
            id: 5,
            title: "Probability & Statistics",
            author: "Sarah Wilson",
            description: "Explore the world of data analysis and interpretation. This course covers key concepts in probability, descriptive statistics, and inferential statistics, equipping you with the skills to make data-driven decisions.",
            brief: "This course provides a comprehensive introduction to probability and statistics, focusing on data analysis and interpretation. You’ll learn key concepts in probability theory, descriptive statistics, and inferential statistics, enabling you to make informed, data-driven decisions. With practical applications in various fields, this course equips you with essential skills for understanding and working with data.",
            requisites: [
                "Basic understanding of arithmetic and algebra",
                "Familiarity with graphs and data representation",
                "Interest in data analysis and interpretation",
                "Willingness to engage with statistical concepts",
            ],
            images: [],
            time: "40 hours",
            level: "Advanced",
            curriculum: [
                { 
                    module: "Introduction to Data", 
                    content: "Types of data and data collection methods",
                    chapters: [
                        { title: "Data Types", content: "Qualitative vs. quantitative data", time: "1 hour" },
                        { title: "Data Collection", content: "Surveys, experiments, and observational studies", time: "1 hour" }
                    ]
                },
                { 
                    module: "Descriptive Statistics", 
                    content: "Mean, median, mode, variance, standard deviation",
                    chapters: [
                        { title: "Measures of Central Tendency", content: "Mean, median, mode", time: "1 hour 30 min" },
                        { title: "Measures of Dispersion", content: "Range, variance, standard deviation", time: "1 hour 30 min" },
                        { title: "Data Visualization", content: "Histograms, box plots, scatter plots", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Probability", 
                    content: "Basic probability rules, conditional probability",
                    chapters: [
                        { title: "Probability Basics", content: "Understanding probability", time: "1 hour" },
                        { title: "Probability Rules", content: "Addition and multiplication rules", time: "1 hour 30 min" },
                        { title: "Conditional Probability", content: "Dependent and independent events", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Distributions", 
                    content: "Normal, binomial, and other common distributions",
                    chapters: [
                        { title: "Normal Distribution", content: "Properties and applications", time: "1 hour 30 min" },
                        { title: "Binomial Distribution", content: "Characteristics and uses", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Inferential Statistics", 
                    content: "Confidence intervals and hypothesis testing",
                    chapters: [
                        { title: "Confidence Intervals", content: "Estimating population parameters", time: "1 hour 30 min" },
                        { title: "Hypothesis Testing", content: "Null and alternative hypotheses", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Regression & Correlation", 
                    content: "Linear regression and correlation analysis",
                    chapters: [
                        { title: "Linear Regression", content: "Modeling relationships between variables", time: "1 hour 30 min" },
                        { title: "Correlation", content: "Measuring strength and direction of relationships", time: "1 hour 30 min" }
                    ]
                },
            ],
            language: ["English"],
            price: 30,
            updated_date: "10-03-2025",
        },
        {
            id: 6,
            title: "Number Theory",
            author: "David Lee",
            description: "Dive into the properties and relationships of numbers. This course covers prime numbers, divisibility, modular arithmetic, and more, providing a strong foundation for cryptography and advanced mathematical studies.",
            brief: "This course offers an in-depth exploration of number theory, focusing on the properties and relationships of integers. You’ll study prime numbers, divisibility rules, modular arithmetic, and number-theoretic functions, laying a solid foundation for applications in cryptography and advanced mathematical concepts. With a blend of theoretical insights and practical examples, this course is ideal for those looking to deepen their understanding of numbers.",
            requisites: [
                "Strong proficiency in Algebra 1 and basic geometry",
                "Familiarity with functions and graphing",
                "Basic understanding of proofs and logical reasoning",
                "Interest in abstract mathematical concepts",
            ],
            images: [],
            time: "30 hours",
            level: "Optional Advanced",
            curriculum: [
                { 
                    module: "Introduction to Number Theory", 
                    content: "History and applications",
                    chapters: [
                        { title: "What is Number Theory?", content: "Overview and significance", time: "1 hour" },
                        { title: "Historical Context", content: "Key figures and developments", time: "1 hour" }
                    ]
                },
                { 
                    module: "Divisibility & Primes", 
                    content: "Divisibility rules, prime factorization",
                    chapters: [
                        { title: "Divisibility Rules", content: "Common rules and examples", time: "1 hour" },
                        { title: "Prime Numbers", content: "Identifying and understanding primes", time: "1 hour" },
                        { title: "Prime Factorization", content: "Fundamental theorem of arithmetic", time: "1 hour 30 min" }
                    ]
                },
                { 
                    module: "Greatest Common Divisor", 
                    content: "Euclidean algorithm",
                    chapters: [
                        { title: "Introduction to GCD", content: "Understanding the greatest common divisor", time: "1 hour" },
                        { title: "Euclidean Algorithm", content: "Efficient computation of GCD", time: "1 hour" }
                    ]
                },
                { 
                    module: "Congruences", 
                    content: "Modular arithmetic and applications",
                    chapters: [
                        { title: "Introduction to Congruences", content: "Basic concepts and properties", time: "1 hour" },
                        { title: "Applications of Congruences", content: "Cryptography and computer science", time: "1 hour" }
                    ]
                },
                { 
                    module: "Number Theoretic Functions", 
                    content: "Euler’s totient function",
                    chapters: [
                        { title: "Introduction to Number Theoretic Functions", content: "Overview and significance", time: "1 hour" },
                        { title: "Euler’s Totient Function", content: "Properties and applications", time: "1 hour" }
                    ]
                },
                { 
                    module: "Cryptography Applications", 
                    content: "RSA and modern encryption basics",
                    chapters: [
                        { title: "Introduction to Cryptography", content: "Basic concepts and history", time: "1 hour" },
                        { title: "RSA Algorithm", content: "Key generation and encryption", time: "1 hour" }
                    ]
                },
            ],
            language: ["English"],
            price: 25,
            updated_date: "15-04-2025",
        }
    ],
    setCourses: (courses: Course[]) => set({ courses }),
    getCourseByName: (name: string) => {
        return get().courses.find((course: Course) => course.title.replace(/\s+/g, '-').toLowerCase() === name)
    }
}))