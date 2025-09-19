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
}

export type Testimonial = {
    id: number;
    name: string;
    feedback: string;
    image: string;
}