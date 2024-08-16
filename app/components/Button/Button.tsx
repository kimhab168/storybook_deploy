import React from "react";
import ButtonProps, { ButtonSize } from "./ButtonProps";
const Button: React.FC<ButtonProps> = ({
  label = "Button",
  color = "bg-blue-500",
  size = "S",
  onClick,
}) => {
  const btnSize: Record<ButtonSize, string> = {
    S: "text-sm py-1 px-2 rounded-sm",
    M: "text-base py-2 px-4 rounded-md",
    L: "text-lg py-3 px-6 rounded-lg",
    XL: "text-xl py-4 px-8 rounded-xl",
    XXL: "text-2xl py-5 px-10 rounded-2xl",
  };

  return (
    <button className={`${color} ${btnSize[size]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
