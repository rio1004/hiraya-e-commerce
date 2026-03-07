import { useQuery } from "@tanstack/react-query";
import { OrderService } from "./order.service";
import type { OrdersResponse } from "./order.type";

export const useOrders = () => {
  return useQuery<OrdersResponse>({
    queryKey: ["orders"],
    queryFn: OrderService.getOrders,
    initialData: [],
  });
};
