import CheckBox from "@/components/CheckBox";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import CardFooter from "./CardFooter";
import { useCart } from "@/stores/cart/useCart";
import { ImSpinner } from "react-icons/im";
import { useCartQty } from "@/features/cart/cart.hook";

const Cart = () => {
  const [all, setAll] = useState<boolean>(false);
  const cartItems = useCart((state) => state.cartItems);
  const fetchCartItems = useCart((state) => state.fetchCartItems);
  const placedItems = useCart((state) => state.placedItems);
  const cartLoading = useCart((state) => state.cartLoading);
  const { data } = useCartQty();
  console.log(data, "TEST");
  const onChangeChecked = () => {
    setAll(!all);
  };
  useEffect(() => {
    console.log(placedItems);
  }, [placedItems]);
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
          <div className="grid grid-cols-4 md:grid-cols-6 font-light">
            <div className="flex gap-2 col-span-3 md:col-span-2 items-center">
              <CheckBox
                isChecked={all}
                onChangeChecked={onChangeChecked}
                label=""
              />
              <p>Product</p>
            </div>

            <p className="hidden md:block">Unit Price</p>
            <p className="hidden md:block">Quantity</p>
            <p className="hidden md:block">Total Price</p>
            <p className="">Actions</p>
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
