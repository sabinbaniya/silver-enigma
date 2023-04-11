import Image from "next/image";
import Card from "../../common/Card";

interface Props {
  src: string;
  label: string;
}
const TechSkillsCard = ({ src, label }: Props) => {
  return (
    <>
      <Card>
        <div className="flex items-center space-x-2 p-2">
          <Image height={24} width={24} src={src} alt={label} />
          <span className="font-semibold">{label}</span>
        </div>
      </Card>
    </>
  );
};
export default TechSkillsCard;
