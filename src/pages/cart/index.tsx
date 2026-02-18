import CheckBox from "@/components/CheckBox";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import CardFooter from "./CardFooter";
import { useCart } from "@/stores/cart/useCart";
import { ImSpinner } from "react-icons/im";

const Cart = () => {
  const [all, setAll] = useState<boolean>(false);
  const cartItems = useCart((state) => state.cartItems);
  const fetchCartItems = useCart((state) => state.fetchCartItems);
  const cartLoading = useCart((state) => state.cartLoading);
  const onChangeChecked = () => {
    setAll(!all);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
  const renderCartItems = () => {
    console.log(cartItems, "IIIII");
    return cartItems?.map((item) => (
      <CartCard
        key={item.variant.id}
        variant={item.variant}
        quantity={item.quantity}
      />
    ));
  };
  return (
    <div className="flex justify-center flex-col items-center text-center ">
      <p className="text-3xl py-5">Shopping Bag</p>
      <div className="flex flex-col gap-4 pb-20">
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

        {cartLoading ? (
          <ImSpinner className="animate-spin self-center mt-20" size={40} />
        ) : (
          renderCartItems()
        )}
        <CardFooter />
      </div>
    </div>
  );
};

export default Cart;
