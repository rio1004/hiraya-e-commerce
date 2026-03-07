import { axiosInstance } from "@/api/axiosInstance";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { CreateAddressValues } from "./address.type";

export const AddressService = {
  createAddress: async (data: CreateAddressValues) => {
    const res = await axiosInstance.post(
      API_ENDPOINTS.ADDRESSS.CREATE_ADDRESS,
      data,
    );
    return res.data;
  },
};
