import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import Card from "../../common/Card";
import LanguageLogoText from "./LanguageLogoText";

interface Props {
  src: string;
  title: string;
  fromSettings?: boolean;
  selected?: boolean;
  onClick?: Function;
}

const ProjectsCard = ({
  src,
  title,
  fromSettings,
  selected,
  onClick,
}: Props) => {
  return (
    <>
      <Card>
        <div
          onClick={() => onClick?.()}
          className={`p-4 ${
            fromSettings ? "rounded-lg border-[3px] border-transparent" : ""
          } ${selected ? "border-indigo-500" : ""} ${
            onClick ? "cursor-pointer" : ""
          }`}
        >
          <Image
            height={100}
            width={500}
            src={src}
            alt=""
            className="rounded-lg"
          />
          <div className={`relative mt-4 ${fromSettings ? "space-y-2" : ""}`}>
            {fromSettings && (
              <HiDotsHorizontal className="absolute right-0 top-0.5" />
            )}
            <p className="mr-5 text-xl font-bold">{title}</p>
            {fromSettings ? (
              <>
                <div className="flex items-center space-x-3 text-gray-500">
                  <span>HTML/CSS</span>
                  <span className="block h-1.5 w-1.5 rounded-full bg-gray-500" />
                  <span>Javascript</span>
                  <span className="block h-1.5 w-1.5 rounded-full bg-gray-500" />
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
                  <p className="ml-2 text-gray-500">3 contributors</p>
                </div>
              </>
            ) : (
              <div className="mt-2 flex items-center space-x-4">
                <LanguageLogoText
                  src="/assets/icons/html-5.svg"
                  label="HTML/CSS"
                />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                <LanguageLogoText src="/assets/icons/react.svg" label="React" />
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};
export default ProjectsCard;
