import { create } from "zustand";
import { Notification } from "@/app/model";

interface NotificationState {
    notification: Notification | null;
    setNotification: (notification: Notification | null) => void;
}

export const useNotification = create<NotificationState>((set) => ({
    notification: null,
    setNotification: (notification) => set({ notification })
}));