import Image from "next/image";
import Card from "../../common/Card";

type Props = {
  src: string;
} & (OtherProps | SettingsProps);

interface SettingsProps {
  fromSettings?: true;
  selected?: boolean;
  onClick?: Function;
}

interface OtherProps {
  fromSettings?: never;
  selected?: never;
  onClick?: never;
}

const PlaygroundsCard = ({ src, fromSettings, selected, onClick }: Props) => {
  return (
    <>
      <Card>
        <div
          className={`relative flex items-start space-x-4 rounded-lg p-4 ${
            selected
              ? "border-[3px] border-indigo-600"
              : "border-[3px] border-transparent"
          } ${onClick ? "cursor-pointer" : ""}`}
          onClick={() => onClick?.()}
        >
          {fromSettings && (
            <div
              className={`absolute right-4 top-4 h-6 w-6 rounded-full border-2 ${
                selected
                  ? "border-transparent bg-indigo-600"
                  : "border-gray-400 bg-white"
              }`}
            >
              <div className="relative h-full w-full rounded-full">
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>
            </div>
          )}
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
