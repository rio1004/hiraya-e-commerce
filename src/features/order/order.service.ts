import { axiosInstance } from "@/api/axiosInstance";
import { API_ENDPOINTS } from "@/api/endpoints";

export const OrderService = {
  getOrders: async () => {
    const res = await axiosInstance.get(API_ENDPOINTS.ORDER.GET_ORDERS);
    return res.data;
  },
};
