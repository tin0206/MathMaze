export type User = {
    id: number;
    name: string;
    email: string;
    role: string;
}

export type Chapter = {
    title: string;
    content: string;
    time: string;
}

type Section = {
    module: string;
    content: string;
    chapters: Chapter[];
}

export type Course = {
    id: number;
    title: string;
    author: string;
    description: string;
    brief: string;
    requisites: string[];
    images: string[];
    time: string;
    level: string;
    curriculum: Section[];
    language: string[];
    price: number;
    updated_date: string;
}

export type Testimonial = {
    id: number;
    name: string;
    feedback: string;
    image: string;
}

export type Notification = {
    id: number;
    type: "success" | "error" | "info" | "warning";
    title: string;
    message: string;
    duration?: number;
}

export type ResourceCreatingCourse = {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
}