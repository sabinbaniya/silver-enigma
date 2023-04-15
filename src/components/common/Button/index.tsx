import { ReactNode } from "react";
import Loading from "../../svg/Loading";

interface Props {
  children: ReactNode;
  style: keyof typeof ButtonStyles;
  onClick?: Function;
  loading?: boolean;
  disabled?: boolean;
  type?: "button";
}

const ButtonStyles = {
  primary: "bg-indigo-600 text-indigo-50",
  secondary: "bg-gray-100 text-gray-800",
};

const Button = ({
  children,
  style,
  onClick,
  loading,
  type,
  disabled,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={() => onClick?.()}
      className={`relative rounded-lg p-2 px-4 font-semibold ${
        ButtonStyles[style]
      } ${loading ? "cursor-wait opacity-80" : ""} ${
        disabled ? "cursor-not-allowed opacity-80" : ""
      }`}
    >
      <span className={loading ? "opacity-0" : "opacity-100"}>{children}</span>
      <Loading
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};
export default Button;
