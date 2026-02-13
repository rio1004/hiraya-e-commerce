import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  email: string;
  firebaseUid: string;
  name: string;
  createdAt: string;
  role: "CUSTOMER" | "ADMIN" | string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  setUserAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUserAuth: (user: User, token: string) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
