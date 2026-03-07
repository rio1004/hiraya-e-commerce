import axios from "axios";

const api = "https://psgc.gitlab.io/api";

export const LocationServices = {
  getRegions: async () => {
    const res = await axios.get(`${api}/regions`);
    return res.data;
  },
  getProvinces: async () => {
    const res = await axios.get(`${api}/provinces`);
    return res.data;
  },
  getCities: async () => {
    const res = await axios.get(`${api}/cities`);
    return res.data;
  },
  getMunicipalities: async (provinceCode: string) => {
    const res = await axios.get(`${api}/provinces/${provinceCode}/municipalites`);
    return res.data;
  },
};
