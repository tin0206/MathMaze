import { User } from '@/app/model'
import { create } from 'zustand'

interface UserState {
    user: User | null
    setUser: (user: User | null) => void
}

export const useUser = create<UserState>((set, get) => ({
    user: null,
    setUser: (user) => set({ user }),
}))