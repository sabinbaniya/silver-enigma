import { ComponentPropsWithoutRef } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<T extends FieldValues> = {
  placeholder: string;
  register: UseFormRegister<T>;
  name: Path<T>;
} & (InputFieldProps | TextareaProps);

interface InputFieldProps extends ComponentPropsWithoutRef<"input"> {
  as?: "input";
}

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  as?: "textarea";
  type?: never;
}

const Input = <T extends FieldValues>({
  placeholder,
  as = "input",
  register,
  name,
  ...rest
}: Props<T>) => {
  if (as === "textarea") {
    return (
      <>
        <textarea
          placeholder={placeholder}
          className={`h-24 resize-none rounded-lg border-2 border-gray-200 px-4 py-4 transition-[border] focus:border-gray-400 focus:outline-none`}
          {...(rest as TextareaProps)}
          {...register(name)}
        />
      </>
    );
  }

  return (
    <>
      <input
        placeholder={placeholder}
        className={`h-12 rounded-lg border-2 border-gray-200 px-4 transition-[border] focus:border-gray-400 focus:outline-none`}
        {...(rest as InputFieldProps)}
        {...register(name)}
      />
    </>
  );
};

export default Input;
