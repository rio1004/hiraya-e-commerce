export interface Product {
  name: string;
}

export interface WalletVariant {
  id: string;
  color: string;
  price: string;
  texture: string;
  stock: number;
  product: Product;
  imgSrc: string;
}

export interface CartItem {
  variant: WalletVariant;
  quantity: number;
}

export interface CartContainer {
  items: CartItem[];
}

export interface CartResponse {
  cart: CartContainer;
}
