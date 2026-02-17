import { create } from "zustand";
import type { cartItemType, CartType } from "./cart";
import { CartServices } from "@/api/services/cart.service";

export const useCart = create<CartType>((set) => ({
  cartQty: 0,
  setCartQty: (value: number) => set({ cartQty: value }),
  cartItem: [],
  setCartItem: (item: cartItemType) =>
    set((state) => ({ cartItem: [...state.cartItem, item] })),
  fetchCartQty: async () => {
    const data = await CartServices.getCartQty();
    set({ cartQty: data.qty.totalQuantity });
  },
}));
