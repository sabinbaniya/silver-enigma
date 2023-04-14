import Switch from "@/src/components/common/Forms/Switch";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  title: string;
  subtitle: string;
}

const CheckboxGroup = <T extends FieldValues>({
  title,
  name,
  register,
  subtitle,
}: Props<T>) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="sapce-y-2">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-gray-500">{subtitle}</p>
        </div>
        <Switch register={register} name={name} />
      </div>
    </>
  );
};
export default CheckboxGroup;
