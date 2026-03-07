import { axiosInstance } from "../../api/axiosInstance";
import { API_ENDPOINTS } from "../../api/endpoints";
import type { CartResponse } from "./cart";

export const CartServices = {
  getCartQty: async () => {
    const res = await axiosInstance.get(API_ENDPOINTS.CART.GET_QTY);
    return res.data;
  },
  addToCart: async (variantId: string, quantity: number) => {
    const res = await axiosInstance.post(API_ENDPOINTS.CART.ADD_TO_CART, {
      variantId,
      quantity,
    });
    return res.data;
  },
  getCartItems: async (ids?: string[]) => {
    let queryString = "";
    if (ids && ids?.length > 0) {
      queryString = ids?.join(",");
    }
    const res = await axiosInstance.get<Promise<CartResponse>>(
      API_ENDPOINTS.CART.GET_CART_ITEMS(queryString),
    );
    console.log(res);
    return res.data;
  },
  updateCartItem: async (variantId: string, quantity: number) => {
    const res = await axiosInstance.put(API_ENDPOINTS.CART.UPDATE_CART_ITEMS, {
      variantId,
      quantity,
    });
    return res.data;
  },
  deleteCartItem: async (variantId: string) => {
    const res = await axiosInstance.delete(
      API_ENDPOINTS.CART.DELETE_CART_ITEM(variantId),
    );
    return res;
  },
};
