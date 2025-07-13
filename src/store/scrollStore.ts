// store/scrollStore.ts
import { create } from 'zustand';

type ScrollState = {
  lastSection: string;
  setLastSection: (section: string) => void;
};

export const useScrollStore = create<ScrollState>((set) => ({
  lastSection: '',
  setLastSection: (section) => set({ lastSection: section }),
}));