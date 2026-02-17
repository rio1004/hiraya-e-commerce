import { create } from "zustand";

export type ToastVariant = "success" | "error" | "warning" | "info";

export type ToastData = {
  id: string;
  message: string;
  type: ToastVariant;
};

type ToastStore = {
  toasts: ToastData[];
  showToast: (message: string, type?: ToastVariant) => void;
  removeToast: (id: string) => void;
};

export const useToast = create<ToastStore>((set) => ({
  toasts: [],

  showToast: (message, type = "success") =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        {
          id: crypto.randomUUID(),
          message,
          type,
        },
      ],
    })),

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
