import { TimeOption } from "@/app/model"
import { create } from "zustand"

interface CreateCourseFormState {
    courseType: "video" | "test" | null
    title: string
    category: string
    categoryList: string[]
    time: number | null
    timeList: TimeOption[]
    setCourseType: (courseType: "video" | "test" | null) => void
    setTitle: (title: string) => void
    setCategory: (category: string) => void
    setTime: (time: number | null) => void
}

export const useCreateCourseFormStore = create<CreateCourseFormState>((set) => ({
    courseType: null,
    title: "",
    category: "Pick a category",
    categoryList: ["Pick a category", "Algebra", "Geometry", "Calculus", "Statistics", "Number Theory", "Combinatorics", "Trigonometry", "Logic", "Set Theory", "Probability", "Linear Algebra", "Differential Equations", "Discrete Mathematics", "Mathematical Modeling", "Game Theory"],
    time: null,
    timeList: [
        { label: "I haven't decided yet", value: -1 },
        { label: "I'm very busy (0-2 hours/week)", value: 0 },
        { label: "I can do it, but it will be a side project (3-5 hours/week)", value: 1 },
        { label: "I have some time (6-8 hours/week)", value: 2 },
        { label: "I can dedicate a good amount of time (9-11 hours/week)", value: 3 },
        { label: "I'm all in! (12+ hours/week)", value: 4 },
    ],
    setTitle: (title) => set({ title }),
    setCourseType: (courseType) => set({ courseType }),
    setCategory: (category) => set({ category }),
    setTime: (time) => set({ time }),
}))