import { useQuery } from "@tanstack/react-query";
import { LocationServices } from "./location.service";
import type { SelectOption } from "@/components/Select";
import type { Barangays, Cities, Provinces, Regions } from "./location.type";

export const useRegions = () => {
  return useQuery<Regions, Error, SelectOption[]>({
    queryKey: ["regions"],
    queryFn: LocationServices.getRegions,
    initialData: [],
    select: (data) =>
      data.map((item) => {
        return {
          value: item.code,
          label: item.name,
        };
      }),
  });
};

export const useProvinces = (code: string) => {
  return useQuery<Provinces, Error, SelectOption[]>({
    queryKey: ["provinces", code],
    queryFn: () => LocationServices.getProvinces(code || ""),
    initialData: [],
    enabled: !!code,
    select: (data) => {
      const provinces =
        code === "130000000"
          ? [...data, { code: "NCR", name: "Metro Manila", regionCode: "NCR" }]
          : data;

      return provinces.map((item) => ({
        value: item.code,
        label: item.name,
      }));
    },
  });
};

export const useCities = (regionCode: string, provinceCode?: string) => {
  return useQuery<Cities, Error, SelectOption[]>({
    queryKey: ["cities", regionCode, provinceCode],
    queryFn: () => {
      if (regionCode === "130000000") {
        return LocationServices.getCitiesByRegion(regionCode);
      }
      return LocationServices.getCitiesByProvince(provinceCode || "");
    },
    enabled: regionCode === "130000000" ? !!regionCode : !!provinceCode,
    initialData: [],
    select: (data) => {
      return data.map((item) => ({
        value: item.code,
        label: item.name,
      }));
    },
  });
};

export const useBrgy = (code: string) => {
  return useQuery<Barangays, Error, SelectOption[]>({
    queryKey: ["brgy"],
    queryFn: () => LocationServices.getBrgy(code),
    initialData: [],
    enabled: !!code,
    select: (data) => {
      return data.map((item) => ({
        value: item.code,
        label: item.name,
      }));
    },
  });
};
