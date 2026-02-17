import { CartServices } from "@/api/services/cart.service";
import type { CartItem } from "@/api/services/types/cart";
import CheckBox from "@/components/CheckBox";
import { useCart } from "@/stores/cart/useCart";
import { useRef, useState } from "react";
import { CiTrash } from "react-icons/ci";

const CartCard = (cartItem: CartItem) => {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<string>(
    (Number(cartItem.variant.price) * cartItem.quantity).toFixed(2),
  );
  const [qty, setQty] = useState<number>(cartItem.quantity);
  const { fetchCartQty, fetchCartItems } = useCart();
  const { updateCartItem, deleteCartItem } = CartServices;
  const onChangedChecked = () => console.log;

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

  return (
    <div className="grid grid-cols-6 lg:w-[990px] border p-5 items-center justify-center ">
      <div className="flex gap-3 col-span-2 text-left">
        <CheckBox isChecked={isChecked} onChangeChecked={onChangedChecked} />
        <img src={cartItem.variant.imgSrc} alt="" className="w-[100px]" />
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-light text-3">NEW</p>
            <p className="font-medium text-3">
              {cartItem.variant.product.name || ""}
            </p>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-amber-900 "></div>|
              <p className="text-[10px] font-light">
                {cartItem.variant.texture || ""}
              </p>
            </div>
          </div>
          <p className="w-18 h-6 border text-center flex items-center justify-center rounded-sm text-[#43A047] border-[#43A047] text-[10px]">
            In Stock
          </p>
        </div>
      </div>
      <p>₱ {cartItem.variant.price}</p>
      <div className="flex items-center justify-center">
        <button className="border h-fit px-2 cursor-pointer" onClick={addCount}>
          +
        </button>
        <p className="border-t border-b px-5 h-fit">{qty}</p>
        <button className="border h-fit px-2 cursor-pointer" onClick={subCount}>
          -
        </button>
      </div>
      <p>₱ {totalPrice}</p>
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
