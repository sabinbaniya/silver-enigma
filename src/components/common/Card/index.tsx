import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-gray-100">
        {children}
      </div>
    </>
  );
};
export default Card;
