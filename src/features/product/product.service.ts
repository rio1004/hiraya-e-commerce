import { axiosInstance } from "../../api/axiosInstance";
import { API_ENDPOINTS } from "../../api/endpoints";
import type { ProductsResponse } from "./product";

export const ProductService = {
  getProducts: async () => {
    const res = await axiosInstance.get<ProductsResponse>(
      API_ENDPOINTS.PRODUCTS.GET,
    );
    return res.data;
  },
};
