import CheckBox from "@/components/CheckBox";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import CardFooter from "./CardFooter";
import { CartServices } from "@/api/services/cart.service";
import type { Item, WalletData } from "@/api/services/types/cart";

const Cart = () => {
  const [all, setAll] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Item[]>();
  const { getCartItems } = CartServices;
  const onChangeChecked = () => {
    console.log(all);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await getCartItems();
      setCartItems(res.cart.items);
    };
    fetchCartItems();
  }, []);
  const renderCartItems = () => {
    return cartItems?.map((item) => (
      <CartCard key={item.id} variant={item.variant} quantity={item.quantity} />
    ));
  };
  return (
    <div className="flex justify-center flex-col items-center text-center">
      <p className="text-3xl py-5">Shopping Bag</p>
      <div className="flex flex-col gap-4">
        <div className="lg:w-[990px] px-5 py-2 bg-[#D9D9D9]">
          <div className="grid grid-cols-6 font-light">
            <div className="flex gap-2 col-span-2">
              <CheckBox
                isChecked={all}
                onChangeChecked={onChangeChecked}
                label=""
              />
              <p>Product</p>
            </div>

            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Actions</p>
          </div>
        </div>
        {renderCartItems()}
        <CardFooter />
      </div>
    </div>
  );
};

export default Cart;
