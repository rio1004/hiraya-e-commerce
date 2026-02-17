import { CiSearch } from "react-icons/ci";
import { PiBagLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import LoginModal from "./LoginModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PopupProfile from "./PopupProfile";
import { useAuthStore } from "@/stores/auth/useAuth";
import { useCart } from "@/stores/cart/useCart";

const Header = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const open = useAuthStore((state) => state.openLogin);
  const setOpen = useAuthStore((state) => state.setOpenLogin);
  const { token } = useAuthStore();
  const { cartQty, fetchCartQty } = useCart();
  const navigate = useNavigate();

  const openProfile = () => {
    if (token) {
      setOpenPopup(true);
      return;
    }
    setOpen(true);
  };
  const goToCart = () => {
    if (!token) {
      setOpen(true);
      return;
    }
    navigate("/cart");
  };
  useEffect(() => {
    fetchCartQty();
  }, []);

  return (
    <div>
      <LoginModal onClose={setOpen} open={open} />
      <div className="bg-[#D9D9D9] flex justify-between items-center py-1 ">
        <p className="opacity-0 hidden md:block ">Hiraya Leather</p>
        <p>
          <span className="font-extrabold text-base tracking-widest">
            Free Delivery
          </span>{" "}
          for the first order!!!
        </p>
        <p></p>
      </div>
      <header className="flex justify-between px-8 py-2 shadow-card">
        <p
          className="font-bold text text-3xl cursor-pointer text-[#814A2F]"
          onClick={() => navigate("/")}
        >
          HIRAYA LEATHER
        </p>
        <ul className="flex gap-3 text-xl">
          <li className="">Women</li>|<li>Men</li> |<li>Latest</li> |
          <li>Leather Work</li>
        </ul>
        <div className="flex items-center gap-2 cursor-pointer">
          <CiSearch size={25} />
          <div className="relative" onClick={goToCart}>
            <PiBagLight size={25} />
            <div className="rounded-full text-center w-3 h-3 text-white bg-[#E74C3C] text-[8px] absolute bottom-0 right-0">
              <p>{cartQty}</p>
            </div>
          </div>
          <div className="relative">
            <PopupProfile
              open={openPopup}
              onClose={() => setOpenPopup(false)}
            />
            <AiOutlineUser size={25} onClick={openProfile} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
