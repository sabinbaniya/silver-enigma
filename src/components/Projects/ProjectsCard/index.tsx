import Image from "next/image";
import LanguageLogoText from "./LanguageLogoText";

interface Props {
  src: string;
  title: string;
}

const ProjectsCard = ({ src, title }: Props) => {
  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-gray-100 p-4">
        <Image
          height={100}
          width={500}
          src={src}
          alt=""
          className="rounded-lg"
        />
        <div className="mt-4">
          <p className="text-xl font-bold">{title}</p>
          <div className="mt-2 flex items-center space-x-4">
            <LanguageLogoText src="/assets/icons/html-5.svg" label="HTML/CSS" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
            <LanguageLogoText src="/assets/icons/react.svg" label="React" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectsCard;