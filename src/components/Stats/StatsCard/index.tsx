import Image from "next/image";
import Card from "../../common/Card";

interface Props {
  src: string;
  label: string;
  value: string;
}

const StatsCard = ({ src, label, value }: Props) => {
  return (
    <Card>
      <div className="flex h-20 items-center space-x-1">
        <Image height={52} width={52} src={src} alt="" />
        <div className="flex flex-col -space-y-1">
          <span className="text-lg font-bold text-gray-950">{value}</span>
          <span className="text-gray-700">{label}</span>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
