import { useToast } from "@/stores/toast/useToast";
import ToastItem from "./Toast";

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-10 left-0 w-full flex flex-col items-center gap-3 z-50">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
