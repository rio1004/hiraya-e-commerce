import type { CartItem } from "@/api/services/types/cart";

export type CartType = {
  cartQty: number;
  fetchCartQty: () => void;
  cartItems: CartItem[];
  fetchCartItems: () => void;
};
