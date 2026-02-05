import { type ComponentProps, type ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-black/90",
  outline: "border-black text-black hover:bg-black/5",
  ghost: "border-transparent text-black hover:bg-black/10",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};
const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center border border-black gap-1 mt-3 w-fit self-center px-6 text-sm py-2 cursor-pointer  ${VARIANTS[variant]}  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
