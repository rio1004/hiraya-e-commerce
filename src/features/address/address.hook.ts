import { useMutation } from "@tanstack/react-query";
import type { CreateAddressValues } from "./address.type";
import { AddressService } from "./address.service";

export const useCreateAddress = () => {
  return useMutation({
    mutationFn: (data: CreateAddressValues) =>
      AddressService.createAddress(data),
    onSuccess: (data) => {
      console.log("Address created successfully:", data);
      // Optionally, invalidate queries here if you want to refresh the address list
      // queryClient.invalidateQueries(["addresses"]);
    },
    onError: (error) => {
      console.error("Failed to create address:", error);
    },
  });
};
