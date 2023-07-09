import { create } from "zustand";

export interface DarkMode {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<DarkMode>()((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
