import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style: keyof typeof ButtonStyles;
}

const ButtonStyles = {
  primary: "bg-indigo-600 text-indigo-50",
  secondary: "bg-gray-100 text-gray-800",
};

const Button = ({ children, style }: Props) => {
  return (
    <button
      className={`rounded-lg p-2 px-4 font-semibold ${ButtonStyles[style]}`}
    >
      {children}
    </button>
  );
};
export default Button;
