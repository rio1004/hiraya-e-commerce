import Flag from "@/components/Flag";

type productCardType = {
  title: string;
  price: string;
  qty: number;
  totalPrice: string;
  color: string;
  texture: string;
  src: string;
};

export const ProductCard = ({
  color,
  qty,
  texture,
  price,
  title,
  totalPrice,
  src,
}: productCardType) => {
  return (
    <>
      <div className="flex bg-white p-4 items-center gap-4 font-light border-2">
        <img src={src} alt="" className="h-[130px]" />
        <div className="flex flex-col gap-0.5">
          <p className="font-medium text-[18px]">{title}</p>
          <p className="text-[16px]">P {price}</p>
          <p className="text-[12px] text-[#6C6767]">x{qty}</p>
          <p className="text-[12px]">Total Price</p>
          <p className="text-[18px]">P {totalPrice}</p>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-10" style={{ backgroundColor: color }}></div>
            <p>|</p>
            <p className="text-[12px]">{texture}</p>
          </div>
          <Flag title="Pre order" />
        </div>
      </div>
    </>
  );
};
