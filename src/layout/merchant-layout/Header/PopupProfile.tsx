import { RiCloseLargeFill } from "react-icons/ri";
import { PiUserCircleLight, PiSignOut } from "react-icons/pi";
import { TfiPackage } from "react-icons/tfi";
import { RiUserLocationLine } from "react-icons/ri";
import { motion, AnimatePresence } from "motion/react";
import { useAuthStore } from "@/stores/auth/useAuth";
import { useToast } from "@/stores/toast/useToast";

type PopupProps = {
  open: boolean;
  onClose: () => void;
};

const PopupProfile = ({ onClose, open }: PopupProps) => {
  const { logout } = useAuthStore();
  const { showToast } = useToast();

  const logoutFunc = () => {
    showToast("Logged out successfully", "success");
    onClose();
    logout();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-15 right-0 w-[250px] h-[420px] shadow-card bg-white flex flex-col justify-between z-50"
        >
          <div>
            <div className="p-3 flex flex-col gap-1 bg-[#F8F8F8] ">
              <div className="flex justify-between items-center">
                <p className="font-medium">CJ</p>
                <RiCloseLargeFill
                  onClick={onClose}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-[8px] bg-[#D9D9D9] w-fit py-1 px-2 rounded-full">
                Customer
              </p>
              <p className="text-[10px]">rio@gmail.com</p>
            </div>

            <ul>
              <li className="border-b py-2 px-4 font-light flex justify-between items-center hover:bg-gray-50 transition">
                <p className="text-[12px]">My Account</p>
                <PiUserCircleLight size={24} color="#D9D9D9" />
              </li>
              <li className="border-b py-2 px-4 font-light flex justify-between items-center hover:bg-gray-50 transition">
                <p className="text-[12px]">My Purchases</p>
                <TfiPackage size={24} color="#D9D9D9" />
              </li>
              <li className="border-b py-2 px-4 font-light flex justify-between items-center hover:bg-gray-50 transition">
                <p className="text-[12px]">My Addresses</p>
                <RiUserLocationLine size={24} color="#D9D9D9" />
              </li>
            </ul>
          </div>

          <div
            className="border-t py-2 px-4 font-light flex justify-between items-center hover:bg-gray-50 transition cursor-pointer"
            onClick={logoutFunc}
          >
            <p className="text-[12px]">Log out</p>
            <PiSignOut size={24} color="#D9D9D9" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupProfile;
