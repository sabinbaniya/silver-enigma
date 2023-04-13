import { ReactNode } from "react";
import Input from "../Input";
import Label from "../Label";

interface Props {
  labelText: string;
  placeholder?: string;
  children?: ReactNode;
  as?: "input" | "textarea";
  type?: "text" | "date";
}

const InputGroup = ({ as, labelText, placeholder, children, type }: Props) => {
  return (
    <>
      <div className="my-6 flex flex-col space-y-1">
        <Label text={labelText} />
        <Input type={type} as={as} placeholder={placeholder || labelText} />
        {children}
      </div>
    </>
  );
};
export default InputGroup;
