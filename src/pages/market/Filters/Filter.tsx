import { type ReactNode } from "react";
import { SlArrowUp } from "react-icons/sl";

type Props = {
  title: string;
  children: ReactNode;
};

const Filter = ({ children, title }: Props) => {
  return (
    <div className="w-82.5 flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="tracking-widest font-light">{title}</p>
        <SlArrowUp />
      </div>
      {children}
      <div className="bg-[#E8E8E1] w-full h-px"></div>
    </div>
  );
};

export default Filter;
