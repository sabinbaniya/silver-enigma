import Image from "next/image";

interface Props {
  href: string;
  imgSrc: string;
}

const SocialLinks = ({ href, imgSrc }: Props) => {
  if (!href) return null;
  return (
    <>
      <a
        href={href}
        target="_blank"
        className="rounded-lg border-2 border-gray-200 p-2"
      >
        <Image height={24} width={24} src={imgSrc} alt="" />
      </a>
    </>
  );
};

export default SocialLinks;
