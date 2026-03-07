import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Divider from "@/components/Divider";
import { useCartItems } from "@/features/cart/cart.hook";
import { useCart } from "@/stores/cart/useCart";

const orderItems = (items: { title: string; value: string }) => {
  return (
    <div className="flex justify-between">
      <p>{items.title}</p>
      <p>Php {items.value}</p>
    </div>
  );
};

const OrderSummary = () => {
  const placedItems = useCart((state) => state.placedItems);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const { data, isLoading } = useCartItems(placedItems);

  useEffect(() => {}, [deliveryFee]);

const totalPrice = deliveryFee + (data?.subTotal || 0);
  console.log(data);
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-[#f4f4f4] w-[350px] flex flex-col p-4 px-6">
        <p className="text-center font-semibold">Order summary</p>
        <Divider classname="my-2" />
        {orderItems({
          title: "Subtotal",
          value: data?.subTotal.toString() || "0",
        })}
        {orderItems({
          title: "Delivery fee",
          value: deliveryFee.toString(),
        })}
        <Divider classname="my-2" />
        {orderItems({
          title: "Total price",
          value: totalPrice.toString(),
        })}
      </div>
      <div className="bg-[#f4f4f4] w-[350px] flex flex-col p-4 px-6 gap-3  ">
        <p className=" font-semibold mb-4">Products Ordered</p>
        <div className="overflow-y-auto max-h-100 flex flex-col gap-3 ">
          {!isLoading &&
            data?.items.map((item) => (
              <ProductCard
                key={item.variant.id}
                src={item.variant.imgSrc}
                title={item.variant.product.name}
                price={item.variant.price.toString()}
                qty={item.quantity}
                totalPrice={(
                  Number(item.variant.price) * item.quantity
                ).toString()}
                color={item.variant.color}
                texture={item.variant.texture}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
