import type { CartItem } from "@/features/cart/cart";

export type CartType = {
  cartQty: number;
  fetchCartQty: () => void;
  cartItems: CartItem[];
  fetchCartItems: (ids?: string[]) => void;
  cartLoading: boolean;
  placedItems: string[];
  setPlacedItems: (value: string) => void;
  removePlaceItems: (value: string) => void;
};
