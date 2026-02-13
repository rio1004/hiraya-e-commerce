import { axiosInstance } from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";

export const AuthServices = {
  verifyFirebase: async (token: string) => {
    const res = await axiosInstance.post(
      API_ENDPOINTS.AUTH.FIREBASE_VERIFY,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  },
};
