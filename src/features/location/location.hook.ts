import { useQuery } from "@tanstack/react-query";
import { LocationServices } from "./location.service";

export const useRegions = () => {
  return useQuery({
    queryKey: ["regions"],
    queryFn: LocationServices.getRegions,
    initialData: [],
  });
};

export const useProvinces = () => {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: LocationServices.getProvinces,
    initialData: [],
  });
};
export const useCities = () => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: LocationServices.getCities,
    initialData: [],
  });
};
