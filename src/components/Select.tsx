import { useState, useRef, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

type Option = { value: string; label: string };

type DropdownInputProps<T extends FieldValues> = {
  options: Option[];
  value?: string; // for standalone mode
  onChange?: (value: string) => void; // for standalone mode
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string; // for standalone mode
  // React Hook Form props
  name?: Path<T>;
  control?: Control<T>;
};

export default function DropdownInput<T extends FieldValues>({
  options,
  value: standaloneValue,
  onChange: standaloneOnChange,
  placeholder = "Select an option",
  className = "",
  label,
  error: standaloneError,
  name,
  control,
}: DropdownInputProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Get form context if available
  const formContext = useFormContext<T>();
  const formControl = control || formContext?.control;

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderDropdown = (
    currentValue: string | undefined,
    onChange: (val: string) => void,
    error?: string,
  ) => {
    const selectedLabel = options.find(
      (opt) => opt.value === currentValue,
    )?.label;

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
            className={`w-full border py-2 px-4 flex justify-between items-center transition
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
            className={`absolute mt-1 w-full bg-white border border-gray-200 shadow-lg z-20 
              transition-all duration-200 ease-in-out overflow-hidden
              ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="max-h-60 overflow-auto">
              {options.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 transition
                    hover:bg-gray-800 hover:text-white
                    ${opt.value === currentValue ? "bg-gray-800 text-white" : ""}`}
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

  // React Hook Form mode
  if (name && formControl) {
    return (
      <Controller
        name={name}
        control={formControl}
        render={({ field, fieldState }) =>
          renderDropdown(field.value, field.onChange, fieldState.error?.message)
        }
      />
    );
  }

  // Standalone mode
  return renderDropdown(
    standaloneValue,
    standaloneOnChange ?? (() => {}),
    standaloneError,
  );
}
