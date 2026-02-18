import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState, UserType } from "./auth.type";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUserAuth: (user: UserType, token: string) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
      openLogin: false,
      setOpenLogin: (value: boolean) => set({ openLogin: value }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
