export type cartQtyType = {
  qty: number;
  totalAmount: number;
};
export type cartItemType = {
  id: string;
  amount: number;
  name: string;
};

export type CartType = {
  cartQty: number;
  setCartQty: (value: number) => void;
  cartItem: cartItemType[];
  setCartItem: (value: cartItemType) => void;
  fetchCartQty: () => void;
};
