import { CartServices } from "@/api/services/cart.service";
import Button from "@/components/Button";
import HeartButton from "@/components/HeartButton";
import { CiShoppingCart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { useCart } from "@/stores/cart/useCart";
type Props = {
  src: {
    id: string;
    imgSrc: string;
    color: string;
  }[];
  title: string;
  price: number;
  liked?: boolean;
};
const color = {
  brown: "#814A2F",
  red: "#B31616",
  green: "#0A4C46",
};
const Card = ({ src, title, price, liked = false }: Props) => {
  const { fetchCartQty } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);
  const { addToCart } = CartServices;

  const activeId = src[activeIndex]?.id;
  const activeColor = src[activeIndex]?.color;

  const onAddToCart = async () => {
    try {
      const res = await addToCart(activeId, 1);
      if (res.success) {
        fetchCartQty();
        return;
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="font-light">
      <div className="relative">
        <Swiper onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
          {src.map((item) => (
            <SwiperSlide accessKey="test" key={item.id}>
              <img src={item.imgSrc} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 bg-[#00000090] w-full h-10 z-10 flex justify-center items-center gap-1">
          {src.map((item) => {
            console.log(item.color, activeColor);
            return (
              <div
                key={item.id}
                style={{
                  background: color[item.color.toLowerCase()],
                  border:
                    activeColor.toLowerCase() == item.color.toLowerCase()
                      ? "2px solid white"
                      : "1px solid white",
                  boxShadow:
                    activeColor.toLowerCase() == item.color.toLowerCase()
                      ? "0px 1px 4px 2px rgba(255, 250, 250, 0.5)"
                      : "",
                }}
                className="w-5 h-5 rounded-full"
              ></div>
            );
          })}
        </div>
      </div>

      <div className="flex  items-center justify-center flex-col py-4 border-b border-t-0 border-r border-l border-black">
        <div className="flex w-full items-center justify-center relative">
          <p className="text-xl">{title}</p>
          <div className="absolute right-3">
            <HeartButton liked={liked} />
          </div>
        </div>
        <p>₱ {price.toFixed(2)}</p>

        <Button onClick={onAddToCart}>
          Add to Bag <CiShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Card;
