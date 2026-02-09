import { CiSearch } from "react-icons/ci";
import { PiBagLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import LoginModal from "./LoginModal";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <LoginModal onClose={setOpen} open={open} />
      <div className="bg-[#D9D9D9] flex justify-between items-center py-1 ">
        <p className="opacity-0 hidden md:block">Hiraya Leather</p>
        <p>
          <span className="font-extrabold text-base tracking-widest">
            Free Delivery
          </span>{" "}
          for the first order!!!
        </p>
        <p></p>
      </div>
      <header className="flex justify-between px-8 py-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <p className="font-bold text text-3xl text-[#814A2F]">Hiraya Leather</p>
        <ul className="flex gap-3 text-xl">
          <li className="">Women</li>|<li>Men</li> |<li>Latest</li> |
          <li>Leather Work</li>
        </ul>
        <div className="flex items-center gap-2 cursor-pointer">
          <CiSearch size={25} />
          <PiBagLight size={25} />
          <AiOutlineUser size={25} onClick={() => setOpen(true)} />
        </div>
      </header>
    </div>
  );
};

export default Header;
