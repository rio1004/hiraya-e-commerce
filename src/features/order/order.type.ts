export type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  productName: string;
  color: string;
  texture: string;
  walletType: "BIFOLD" | "TRIFOLD" | "LONG" | "CARDHOLDER";
  image: string;
};
export type Order = {
  subTotal: number;
  deliveryFee: number;
  totalPrice: number;
  items: OrderItem[];
};
export type OrdersResponse = Order[];
