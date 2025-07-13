import { create } from "zustand";

type AppLoaderState = {
  isAppLoaded: boolean;
  setAppLoaded: (loaded: boolean) => void;
};

export const useAppLoaderStore = create<AppLoaderState>((set) => ({
  isAppLoaded: false,
  setAppLoaded: (loaded) => set({ isAppLoaded: loaded }),
}));


