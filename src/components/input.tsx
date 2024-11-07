import { twMerge } from "tailwind-merge";

type Props = {
  type: string;
  isError?: boolean;
  icon?: React.ReactNode;
  placeholder: string;
  className?: string;
  secondaryIcon?: React.ReactNode;
  disabled?: boolean;
};

const InputComp = ({
  type,
  isError,
  icon,
  placeholder,
  className,
  secondaryIcon,
  disabled,
}: Props) => {
  return (
    <div className="relative">
      <input
        disabled={disabled}
        className={twMerge(
          `w-full h-14 disabled:bg-[#F9FAFC] bg-transparent border border-[#E1E1E1]  rounded-full placeholder:font-medium placeholder:text-[#666666] placeholder:text-opacity-40 text-[#666666]  outline-none ${
            icon ? "px-9" : "px-4"
          } ${secondaryIcon ? "pe-9" : "pe-4"} ${
            isError && "border-[#B11A29]"
          }`,
          className
        )}
        placeholder={placeholder}
        type={type}
      />
      {icon && (
        <span className="absolute -translate-y-1/2 top-1/2 left-2">{icon}</span>
      )}
      {secondaryIcon && (
        <span className="absolute -translate-y-1/2 top-1/2 right-2">
          {secondaryIcon}
        </span>
      )}
    </div>
  );
};

export default InputComp;
