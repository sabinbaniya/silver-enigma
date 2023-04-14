import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
}

const Switch = <T extends FieldValues>({ name, register }: Props<T>) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block h-8 w-16 cursor-pointer overflow-hidden rounded-full transition-transform"
      >
        <input
          id={name}
          type="checkbox"
          className="peer hidden"
          {...register(name)}
        />
        <span className="absolute left-1 top-1/2 z-10 block h-6 w-6 -translate-y-1/2 rounded-full bg-indigo-50 transition-all content-[''] peer-checked:left-9" />
        <span className="absolute inset-0 block rounded-full bg-gray-400 transition-all peer-checked:bg-indigo-600" />
      </label>
    </div>
  );
};
export default Switch;
