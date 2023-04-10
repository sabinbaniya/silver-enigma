import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Grid = ({ children }: Props) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
};

export default Grid;
