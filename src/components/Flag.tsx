type Props = {
  title: string;
};

const Flag = ({ title }: Props) => {
  return (
    <p className="w-18 h-6 border text-center flex items-center justify-center rounded-sm text-[#43A047] border-[#43A047] text-[10px]">
      {title}
    </p>
  );
};

export default Flag;
