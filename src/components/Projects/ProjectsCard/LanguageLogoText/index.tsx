import Image from "next/image";

interface Props {
  src: string;
  label: string;
}

const LanguageLogoText = ({ src, label }: Props) => {
  return (
    <>
      <span className="flex items-center space-x-2">
        <Image height={24} width={24} src={src} alt="" />
        <span className="text-gray-500">{label}</span>
      </span>
    </>
  );
};
export default LanguageLogoText;
