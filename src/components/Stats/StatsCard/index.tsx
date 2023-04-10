import Image from "next/image";

interface Props {
  src: string;
  label: string;
  value: string;
}

const StatsCard = ({ src, label, value }: Props) => {
  return (
    <div className="flex h-20 items-center space-x-1 rounded-lg border-2 border-gray-200/60 bg-gray-100 p-2">
      <Image height={52} width={52} src={src} alt="" />
      <div className="flex flex-col -space-y-1">
        <span className="text-lg font-bold text-gray-950">{value}</span>
        <span className="text-gray-700">{label}</span>
      </div>
    </div>
  );
};

export default StatsCard;
