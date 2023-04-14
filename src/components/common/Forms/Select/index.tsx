import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { BiChevronDown } from "react-icons/bi";

interface Props<T extends FieldValues> {
  options: Array<string>;
  register: UseFormRegister<T>;
  name: Path<T>;
}

const Select = <T extends FieldValues>({
  options,
  name,
  register,
}: Props<T>) => {
  return (
    <div className="relative">
      <select
        className="peer h-12 w-full rounded-lg border-2 border-gray-200 px-4 outline-none transition-all focus:border-gray-400 focus:outline-none"
        {...register(name)}
      >
        {options?.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <BiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-lg text-gray-400 transition-all peer-focus:-rotate-180 peer-focus:text-gray-500" />
    </div>
  );
};

export default Select;
