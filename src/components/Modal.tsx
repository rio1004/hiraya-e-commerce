import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { RiCloseLargeFill } from "react-icons/ri";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ children, open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#00000090] flex items-center justify-center z-10"
      onClick={onClose}
    >
      <div
        className="bg-white w-186 p-6 px-25 flex items-center justify-start flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <RiCloseLargeFill
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </div>,
    document.getElementById("root")!,
  );
};

export default Modal;
