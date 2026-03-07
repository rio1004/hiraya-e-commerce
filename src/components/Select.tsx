import { useState, useRef, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";

type Option = { value: string; label: string };

type CustomDropdownProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
};

const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  label,
  error,
}: CustomDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className={`w-full ${className}`} ref={ref}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`w-full border  py-2 px-4 flex justify-between items-center transition
            ${error ? "border-red-500" : "border-gray-300"}
            focus:outline-none focus:ring-2
            ${error ? "focus:ring-red-500" : "focus:ring-gray-500"}`}
        >
          <span className={!selectedLabel ? "text-gray-400" : ""}>
            {selectedLabel || placeholder}
          </span>
          <AiOutlineDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`absolute mt-1 w-full bg-white border border-gray-200  shadow-lg z-20 
            transition-all duration-200 ease-in-out overflow-hidden
            ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="max-h-60 overflow-auto">
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 transition
                  hover:bg-gray-800 hover:text-white
                  ${opt.value === value ? "bg-gray-800 text-white" : ""}`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CustomDropdown;
