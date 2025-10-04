import { Testimonial } from "@/app/model";
import { create } from "zustand";

interface TestimonialState {
    testimonials: Testimonial[];
    setTestimonials: (testimonials: Testimonial[]) => void;
}

export const useTestimonialsStore = create<TestimonialState>((set) => ({
    testimonials: [
        {
            id: 1,
            name: "Alice Johnson",
            feedback: "This platform transformed my understanding of math. The courses are engaging and easy to follow.",
            image: "",
        },
        {
            id: 2,
            name: "Bob Smith",
            feedback: "The interactive lessons and practical examples helped me improve my skills significantly.",
            image: "",
        },
        {
            id: 3,
            name: "Catherine Lee",
            feedback: "I love the variety of courses available. There's something for everyone, no matter your skill level.",
            image: "",
        },
        {
            id: 4,
            name: "David Brown",
            feedback: "The instructors are knowledgeable and explain concepts clearly. I've gained so much confidence in math.",
            image: "",
        }
    ],
    setTestimonials: (testimonials) => set({ testimonials })
}));