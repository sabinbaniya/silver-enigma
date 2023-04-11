import Image from "next/image";
import Card from "../../common/Card";

interface Props {
  title: string;
  src: string;
}

const CertificatesCard = ({ title, src }: Props) => {
  return (
    <>
      <Card>
        <div className="space-y-4 p-4">
          <Image height={48} width={48} src={src} alt="" />
          <div>
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-gray-500">Issued on Dec 16th, 2022</p>
          </div>
          <button className="font-medium text-gray-600 ">
            See credentials
          </button>
        </div>
      </Card>
    </>
  );
};
export default CertificatesCard;
