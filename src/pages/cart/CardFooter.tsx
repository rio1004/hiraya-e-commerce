import CheckBox from "@/components/CheckBox";
import { useState } from "react";

const CardFooter = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChangedChecked = () => setIsChecked(!isChecked);
  return (
    <div className="fixed bottom-0 left-0   w-full flex justify-center items-end ">
      <div className="lg:w-[990px] border-t border-l border-r py-7 px-5 flex justify-between bg-white">
        <div className="flex gap-4 items-center">
          <CheckBox isChecked={isChecked} onChangeChecked={onChangedChecked} />
          <p>Select All</p>
          <p>Delete</p>
        </div>
        <div className="flex gap-4 items-center">
          <p>Total Item (2)</p>
          <p>₱ 689.00</p>
          <button className="bg-[#009900] text-white px-6 py-2 font-light">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
