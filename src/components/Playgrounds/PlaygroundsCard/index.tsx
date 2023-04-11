import Image from "next/image";
import Card from "../../common/Card";

interface Props {
  src: string;
}

const PlaygroundsCard = ({ src }: Props) => {
  return (
    <>
      <Card>
        <div className="flex items-start space-x-4 p-4">
          <Image height={48} width={48} src={src} alt="" />
          <div className="space-y-1">
            <p className="text-xl font-semibold">Playground title</p>
            <div className="flex items-center space-x-2 text-gray-500">
              <span>HTML/CSS</span>
              <span className="h-1 w-1 rounded-full bg-gray-500" />
              <span>1 min ago</span>
            </div>
            <div className="flex">
              <Image
                height={24}
                width={24}
                src="/assets/images/avatar-2.png"
                alt=""
              />
              <Image
                height={24}
                width={24}
                src="/assets/images/avatar.png"
                alt=""
                className="-ml-2"
              />
              <p className="text-gray-500">
                Shared with <span className="font-semibold">Adam,Anna</span>...
                + 7 more
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default PlaygroundsCard;
