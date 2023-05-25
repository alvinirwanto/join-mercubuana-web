import { create } from 'zustand'

export const useBrosurStore = create((set) => ({
    brosur: false,
    showBrosur: () => set((state) => ({ brosur: true })),
    closeBrosur: () => set((state) => ({ brosur: false })),
}))