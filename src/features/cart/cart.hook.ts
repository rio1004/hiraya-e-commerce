import { useMutation, useQuery } from "@tanstack/react-query";
import { CartServices } from "./cart.service";
import { useToast } from "@/stores/toast/useToast";
import type {
  CartItem,
  CartQueryResult,
  CartResponse,
  WalletVariant,
} from "./cart";

export function useCartQty() {
  return useQuery({
    queryKey: ["cart-qty"],
    queryFn: CartServices.getCartQty,
  });
}

export function useUpdateCartItem() {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({
      variantId,
      quantity,
    }: {
      variantId: string;
      quantity: number;
    }) => CartServices.updateCartItem(variantId, quantity),

    onSuccess: () => {
      showToast("Successfully added to the cart", "success");
    },
  });
}

export const useCartItems = (ids?: string[]) => {
  return useQuery<CartResponse, Error, CartQueryResult>({
    queryKey: ["cart-items", ids],
    queryFn: () => CartServices.getCartItems(ids),
    select: (data) => {
      const total = data.cart.items.reduce(
        (sum: number, item: CartItem) =>
          sum + Number(item.variant.price) * item.quantity,
        0,
      );
      return {
        subTotal: total,
        items: data.cart.items,
      };
    },
  });
};
