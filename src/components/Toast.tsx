import { IoCheckmark, IoCloseOutline, IoWarningOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useEffect } from "react";
import { useToast, type ToastData } from "@/stores/toast/useToast";

type Props = {
  toast: ToastData;
};

const ToastItem = ({ toast }: Props) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast.id, removeToast]);

  const variantStyles = {
    success: {
      icon: <IoCheckmark size={24} className="text-emerald-600" />,
      border: "border-b-emerald-600",
    },
    error: {
      icon: <MdOutlineErrorOutline size={24} className="text-red-600" />,
      border: "border-b-red-600",
    },
    warning: {
      icon: <IoWarningOutline size={24} className="text-amber-500" />,
      border: "border-b-amber-500",
    },
    info: {
      icon: <CiCircleInfo size={24} className="text-blue-600" />,
      border: "border-b-blue-600",
    },
  };

  const variant = variantStyles[toast.type];

  return (
    <div
      className={`flex items-center gap-4 px-4 py-4 shadow-card bg-white border border-b-3 ${variant.border}  min-w-[300px]`}
    >
      {variant.icon}
      <p className="flex-1">{toast.message}</p>
      <IoCloseOutline
        size={20}
        className="cursor-pointer"
        onClick={() => removeToast(toast.id)}
      />
    </div>
  );
};

export default ToastItem;
