export type cartQtyType = {
  qty: number;
  totalAmount: number;
};
export type cartItemType = {
  id: string;
  amount: number;
  name: string;
};

export type merchantType = {
  cartQty: cartQtyType;
  setCartQty: (value: cartQtyType) => void;
  cartItem: cartItemType[];
  setCartItem: (value: cartItemType) => void;
};
