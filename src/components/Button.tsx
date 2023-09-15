import React from "react";

interface ButtonProps {
  label: string | React.ReactNode;
  variant: "outlined" | "contained";
  type?: "button" | "submit";
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  customClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  type,
  buttonProps,
  customClassName,
}) => {
  return (
    <button
      type={type}
      {...buttonProps}
      className={`${customClassName} ${
        variant === "contained"
          ? "bg-[#BE123C] text-white"
          : "bg-[#BE123C1A] border border-[#BE123C] text-[#333]"
      } flex items-center justify-center gap-[12px] py-[12px] px-[23px] text-[20px] font-medium rounded-[10px]`}
    >
      {label}
    </button>
  );
};

export default Button;
