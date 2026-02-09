import { FiCheck } from "react-icons/fi";

type Props = {
  label?: string;
  isChecked: boolean;
  onChangeChecked: () => void;
  colorFilter?: string;
};

const CheckBox = ({
  isChecked,
  label,
  onChangeChecked,
  colorFilter,
}: Props) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChangeChecked}
        className="peer sr-only"
      />

      <span
        className=" bg-white
            h-5 w-5  border border-gray-400
            flex items-center justify-center
            transition
            peer-checked:bg-[#ADABAB]
          "
      >
        {isChecked && <FiCheck />}
      </span>
      {colorFilter && (
        <div
          className={` h-5 w-5 border-none`}
          style={{ backgroundColor: colorFilter }}
        ></div>
      )}

      {label && <p>{label}</p>}
    </label>
  );
};

export default CheckBox;
