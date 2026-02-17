import { create } from "zustand";
import type { CartType } from "./cart";
import { CartServices } from "@/api/services/cart.service";

export const useCart = create<CartType>((set) => ({
  cartQty: 0,
  fetchCartQty: async () => {
    const data = await CartServices.getCartQty();
    set({ cartQty: data.qty.totalQuantity });
  },

  cartItems: [],
  fetchCartItems: async () => {
    try {
      const data = await CartServices.getCartItems();
      set({ cartItems: data.cart.items });
    } catch (error) {
      console.log(error);
    }
  },
}));
