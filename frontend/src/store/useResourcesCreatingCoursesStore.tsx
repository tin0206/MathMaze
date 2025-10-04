import { ResourceCreatingCourse } from '@/app/model'
import { create } from 'zustand'

interface ResourcesCreatingCoursesState {
    resources: ResourceCreatingCourse[]
    setResources: (resources: ResourceCreatingCourse[]) => void
}

export const useResourcesCreatingCoursesStore = create<ResourcesCreatingCoursesState>((set) => ({
    resources: [
        {
            id: 1,
            title: 'Create an Engaging Course',
            description: 'Whether you\'ve been teaching for years or are just starting out, you can create a compelling course. We’ve compiled resources and best practices to help you succeed, no matter where you begin.',
            link: '',
            image: ''
        },
        {
            id: 2,
            title: 'Start Creating Videos',
            description: 'High-quality video lectures can make your course stand out. Use our resources to learn the basics.',
            link: '',
            image: ''
        },
        {
            id: 3,
            title: 'Build Your Learner Community',
            description: 'Set your course up for success by building a community of learners.',
            link: '',
            image: ''
        },
        {
            id: 4,
            title: 'Join the New Instructor Challenge!',
            description: 'Discover tips and resources designed just for you, to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a congratulatory reward. Start today!',
            link: '',
            image: ''
        }
    ],
    setResources: (resources) => set({ resources })
}))