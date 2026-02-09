import CheckBox from "@/components/CheckBox";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";

const CartCard = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChangedChecked = () => console.log;
  return (
    <div className="grid grid-cols-6 lg:w-[990px] border p-5 items-center justify-center ">
      <div className="flex gap-3 col-span-2 text-left">
        <CheckBox isChecked={isChecked} onChangeChecked={onChangedChecked} />
        <img src="/husai.jpg" alt="" className="w-[100px]" />
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-light text-3">NEW</p>
            <p className="font-medium text-3">HUSAI WALLET</p>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-amber-900 "></div>|
              <p className="text-[10px] font-light">SUEDE</p>
            </div>
          </div>
          <p className="w-18 h-6 border text-center flex items-center justify-center rounded-sm text-[#43A047] border-[#43A047] text-[10px]">
            In Stock
          </p>
        </div>
      </div>
      <p>₱ 689.00</p>
      <div className="flex items-center justify-center">
        <button className="border h-fit px-2 cursor-pointer">+</button>
        <p className="border-t border-b px-5 h-fit">1</p>
        <button className="border h-fit px-2 cursor-pointer">-</button>
      </div>
      <p>₱ 689.00</p>
      <div className="flex items-center justify-center">
        {" "}
        <CiTrash size={24} />
      </div>
    </div>
  );
};

export default CartCard;
