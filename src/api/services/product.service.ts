import { axiosInstance } from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import type { ProductsResponse } from "./types/product";

export const ProductService = {
  getProducts: async () => {
    const res = await axiosInstance.get<ProductsResponse>(
      API_ENDPOINTS.PRODUCTS.GET,
    );
    return res.data;
  },
};
