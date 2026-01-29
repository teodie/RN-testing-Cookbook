import { create } from 'zustand'

type BearStateType = {
  bears: number
  increasePopulation: () => void
  huntThemAll: () => void
  updateBears: (newBears: number) => void
}

export const useBearStore = create<BearStateType>()(
  (set) => ({
    bears: 2,
    increasePopulation: () => set((state) => ({bears: state.bears + 1})),
    huntThemAll: () => set({bears: 0}),
    updateBears: (newBears) => set({bears: newBears})
  })
)