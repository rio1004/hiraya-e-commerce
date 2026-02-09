import { create } from "zustand";
import type { cartItemType, cartQtyType, merchantType } from "./types";

export const useMerchant = create<merchantType>((set) => ({
  cartQty: {
    qty: 0,
    totalAmount: 0,
  },
  setCartQty: (value: cartQtyType) =>
    set((state) => ({
      cartQty: {
        qty: state.cartQty.qty + value.qty,
        totalAmount: state.cartQty.totalAmount + value.totalAmount,
      },
    })),
  cartItem: [],
  setCartItem: (item: cartItemType) =>
    set((state) => ({ cartItem: [...state.cartItem, item] })),
}));
