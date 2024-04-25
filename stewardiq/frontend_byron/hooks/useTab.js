import { create } from "zustand";

export const useTab = create((set) => ({
  tab: "Main View",
  setTab: (tab) => set({ tab: tab }),
}));
