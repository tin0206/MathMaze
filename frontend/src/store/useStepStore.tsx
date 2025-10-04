import { create } from "zustand"
import { useCreateCourseFormStore } from "./useCreateCourseFormStore";

interface StepState {
    initialStep: number;
    step: number;
    maxStep: number;
    setStep: (step: number) => void;
}

export const useStepStore = create<StepState>((set) => ({
    initialStep: 1,
    step: 1,
    maxStep: 4,
    setStep: (step) => set({ step }),
}))