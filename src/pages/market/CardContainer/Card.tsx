import HeartButton from "@/components/HeartButton";
import { CiShoppingCart } from "react-icons/ci";

type Props = {
  src: string;
  title: string;
  price: number;
  liked?: boolean;
};

const Card = ({ src, title, price, liked = false }: Props) => {
  return (
    <div className="font-light">
      <img src={src} alt="" />
      <div className="flex  items-center justify-center flex-col py-4 border-b border-t-0 border-r border-l border-black">
        <div className="flex w-full items-center justify-center relative">
          <p className="text-xl">{title}</p>
          <div className="absolute right-3">
            <HeartButton liked={liked} />
          </div>
        </div>
        <p>₱ {price.toFixed(2)}</p>

        <button className="flex items-center border border-black gap-1 mt-3 w-fit self-center px-6 text-sm py-2 ">
          Add to Bag <CiShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
