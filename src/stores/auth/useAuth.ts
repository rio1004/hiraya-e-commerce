import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState, User } from "./auth.type";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUserAuth: (user: User, token: string) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
      openLogin: false,
      setOpenLogin: (value: boolean) => set({ openLogin: value }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
