import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style: keyof typeof ButtonStyles;
  onClick?: Function;
}

const ButtonStyles = {
  primary: "bg-indigo-600 text-indigo-50",
  secondary: "bg-gray-100 text-gray-800",
};

const Button = ({ children, style, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={`rounded-lg p-2 px-4 font-semibold ${ButtonStyles[style]}`}
    >
      {children}
    </button>
  );
};
export default Button;
