import CheckBox from "@/components/CheckBox";
import { useCart } from "@/stores/cart/useCart";
import { useState } from "react";
import { useNavigate } from "react-router";

const CardFooter = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChangedChecked = () => setIsChecked(!isChecked);
  const placedItems = useCart((state) => state.placedItems);
  const navigate = useNavigate();
  const proceed = () => {
    if (placedItems.length < 0) return;
    navigate("/delivery-info");
  };
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-end ">
      <div className="w-full lg:w-247.5 border-t border-l border-r py-7 px-5 flex justify-between bg-white">
        <div className="flex gap-4 items-center">
          <CheckBox isChecked={isChecked} onChangeChecked={onChangedChecked} />
          <p>Delete</p>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center">
          <p>Total Item ({placedItems.length})</p>
          <p>₱ 689.00</p>
          <button
            className="bg-[#009900] text-white px-2 md:px-6 py-2 font-light"
            onClick={proceed}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
