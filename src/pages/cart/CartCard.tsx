import { CartServices } from "@/features/cart/cart.service";
import type { CartItem } from "@/features/cart/cart";
import CheckBox from "@/components/CheckBox";
import { useCart } from "@/stores/cart/useCart";
import { useEffect, useRef, useState } from "react";
import { CiTrash } from "react-icons/ci";

const CartCard = (cartItem: CartItem) => {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<string>(
    (Number(cartItem.variant.price) * cartItem.quantity).toFixed(2),
  );
  const [qty, setQty] = useState<number>(cartItem.quantity);
  const {
    fetchCartQty,
    fetchCartItems,
    setPlacedItems,
    placedItems,
    removePlaceItems,
  } = useCart();
  const { updateCartItem, deleteCartItem } = CartServices;
  const onChangedChecked = () => {
    setIsChecked(!isChecked);
    setPlacedItems(cartItem.variant.id);
    console.log(isChecked, "LSJKLSKDFJ", cartItem.variant.id);
  };

  useEffect(() => {
    if (!isChecked) {
      removePlaceItems(cartItem.variant.id);
    }
  }, [isChecked]);

  useEffect(() => {
      console.log(placedItems)
  }, [placedItems]);
  console.log(placedItems)
  const debouncedUpdate = (variantId: string, quantity: number) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await updateCartItem(variantId, quantity);

        if (res.cart.success) {
          const newQty = res.cart.message.quantity;
          fetchCartQty();
          setQty(newQty);
          setTotalPrice((Number(cartItem.variant.price) * newQty).toFixed(2));
        }
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  };

  const addCount = () => {
    const newQty = qty + 1;
    setQty(newQty);
    debouncedUpdate(cartItem.variant.id, newQty);
  };

  const subCount = () => {
    const newQty = qty > 1 ? qty - 1 : 1;
    setQty(newQty);
    debouncedUpdate(cartItem.variant.id, newQty);
  };

  const onDeleteCartItem = async (id: string) => {
    try {
      await deleteCartItem(id);
      fetchCartItems();
    } catch (error) {
      console.log(error);
    }
  };
  const addRemove = () => {
    return (
      <>
        <div className="flex items-center justify-center">
          <button
            className="border h-fit px-2 cursor-pointer"
            onClick={addCount}
          >
            +
          </button>
          <p className="border-t border-b px-5 h-fit">{qty}</p>
          <button
            className="border h-fit px-2 cursor-pointer"
            onClick={subCount}
          >
            -
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 w-full lg:w-247.5 border p-5 items-center justify-center ">
      <div className="flex gap-3 col-span-3 md:col-span-2 text-left">
        <div className="flex gap-3 items-center">
          <div>
            <CheckBox
              isChecked={isChecked}
              onChangeChecked={onChangedChecked}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={cartItem.variant.imgSrc} alt="" className="w-25" />
            <div className="md:hidden">{addRemove()}</div>
          </div>
        </div>

        <div className="flex flex-col col-span-2 justify-between">
          <div>
            <p className="font-light text-3 hidden md:block">NEW</p>
            <p className="font-medium text-3">
              {cartItem.variant.product.name || ""}
            </p>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-amber-900 "></div>|
              <p className="text-[10px] font-light">
                {cartItem.variant.texture || ""}
              </p>
            </div>
            <p className="md:hidden">₱ {cartItem.variant.price}</p>
          </div>
          <div>
            <p className="md:hidden text-gray-400 text-xs">Total Price:</p>
            <p className="md:hidden text-xl">₱ {totalPrice}</p>
          </div>
         
        </div>
      </div>
      <p className="hidden md:block">₱ {cartItem.variant.price}</p>
      <div className="hidden md:block">{addRemove()}</div>
      <p className="hidden md:block">₱ {totalPrice}</p>
      <div className="flex items-center justify-center cursor-pointer ">
        {" "}
        <CiTrash
          size={24}
          onClick={() => onDeleteCartItem(cartItem.variant.id)}
          className="hover:text-red-600"
        />
      </div>
    </div>
  );
};

export default CartCard;
