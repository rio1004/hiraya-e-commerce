import { useState, type ComponentProps } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type InputProps = ComponentProps<"input">;

const Input = ({ type, className = "", ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <input
        {...props}
        type={isPassword && showPassword ? "text" : type}
        className={`border border-ring py-3 px-4.5 w-full pr-12 ${className}`}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute right-4.5 top-1/2 -translate-y-1/2 text-ring"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={24} />
          ) : (
            <AiOutlineEye size={24} />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
