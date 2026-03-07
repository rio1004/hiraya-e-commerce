import { axiosInstance } from "@/api/axiosInstance";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { Regions } from "./location.type";

export const LocationServices = {
  getRegions: async () => {
    const res = await axiosInstance.get<Promise<Regions>>(
      API_ENDPOINTS.LOCATION.GET_REGIONS,
    );
    return res.data;
  },
  getProvinces: async (code: string) => {
    const res = await axiosInstance.get(
      API_ENDPOINTS.LOCATION.GET_PROVINCE(code),
    );
    return res.data;
  },
  getCitiesByProvince: async (code: string) => {
    const res = await axiosInstance.get(
      API_ENDPOINTS.LOCATION.GET_CITIES_BY_PROVINCE(code),
    );
    return res.data;
  },
  getCitiesByRegion: async (code: string) => {
    const res = await axiosInstance.get(
      API_ENDPOINTS.LOCATION.GET_CITIES_BY_REGION(code),
    );
    return res.data;
  },
  getBrgy: async (code: string) => {
    const res = await axiosInstance.get(API_ENDPOINTS.LOCATION.GET_BRGY(code));
    return res.data;
  },
};
