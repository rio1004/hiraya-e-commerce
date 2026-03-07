import { useState, type ComponentProps } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import type { UseFormRegisterReturn } from "react-hook-form";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
  registration?: UseFormRegisterReturn;
};

const Input = ({
  type,
  className = "",
  label,
  error,
  registration,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...registration}
          {...props}
          type={isPassword && showPassword ? "text" : type}
          className={`border py-2 px-4.5 w-full pr-12 transition
            ${error ? "border-red-500 focus:ring-red-500" : "border-ring"}
            focus:outline-none focus:ring-1
            ${className}`}
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

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
