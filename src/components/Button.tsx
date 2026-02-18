import { type ComponentProps } from "react";
import { CgSpinnerAlt } from "react-icons/cg";
type ButtonVariant = "primary" | "outline" | "ghost";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-black text-white  hover:bg-white hover:text-black",
  outline: "border-black text-black hover:bg-black/5",
  ghost: "border-transparent text-black hover:bg-black/10",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  loading?: boolean;
};
const Button = ({
  children,
  className = "",
  variant = "primary",
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`relative flex items-center justify-center border border-black gap-1 min-h-8 mt-3 w-fit self-center px-6 text-sm py-2  cursor-pointer   transition-all ${VARIANTS[variant]}  ${className}`}
    >
      <div className="flex" style={{ opacity: loading ? 0 : 1 }}>
        {children}
      </div>
      {loading && (
        <div className="absolute animate-spin">
          <CgSpinnerAlt />
        </div>
      )}
    </button>
  );
};

export default Button;
