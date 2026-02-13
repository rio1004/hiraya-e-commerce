export type Category = {
  id: string;
  name: string;
  createdAt: string; // ISO date string
};
export type Product = {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  categoryId: string;
  createdAt: string;
  category: Category;
  variants: ProductVariant[];
};

export type ProductVariant = {
  id: string;
  productId: string;
  color: string;
  texture: string;
  walletType: "BIFOLD" | "TRIFOLD" | "CARDHOLDER" | string;
  price: number; // recommended to convert from Decimal
  stock: number;
  availability: "IN_STOCK" | "OUT_OF_STOCK" | "PREORDER" | string;
  sku?: string;
  imgSrc?: string; // 👈 here now
  createdAt: string;
};

export type ProductsResponse = Product[];
