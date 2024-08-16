export type ButtonSize = "S" | "M" | "L" | "XL" | "XXL";

export default interface ButtonProps {
  label?: string;
  color?: "bg-red-500" | "bg-blue-500" | "bg-yellow-500";
  size?: ButtonSize;
  onClick?: () => void;
}
