import { ReactNode } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";

interface DefaultProps<T extends FieldValues> {
  labelText: string;
  placeholder?: string;
  children?: ReactNode;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldError | undefined;
}

type TypeTextProps = {
  as?: "input";
} & (TypeSelectProps | OtherTypesProps);

interface TypeSelectProps {
  type?: "select";
  options: Array<string>;
}

interface OtherTypesProps {
  type?: "text" | "date";
  options?: never;
}

interface TypeTextareaProps {
  as?: "textarea";
  type?: never;
  options?: never;
}

type Props<T extends FieldValues> = DefaultProps<T> &
  (TypeTextProps | TypeTextareaProps);

const InputGroup = <T extends FieldValues>({
  as,
  labelText,
  placeholder,
  children,
  type,
  options,
  register,
  name,
  errors,
}: Props<T>) => {
  return (
    <>
      <div className="my-6 flex flex-col space-y-1">
        <Label text={labelText} />
        {as === "textarea" ? (
          <Input
            as={as}
            placeholder={placeholder || labelText}
            register={register}
            name={name}
          />
        ) : type === "select" ? (
          <Select options={options} register={register} name={name} />
        ) : (
          <Input
            type={type}
            as={as}
            placeholder={placeholder || labelText}
            register={register}
            name={name}
          />
        )}
        {children}
      </div>
    </>
  );
};
export default InputGroup;
