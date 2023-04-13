import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

const NavigationLink = ({ children, href, icon }: Props) => {
  const router = useRouter();

  return (
    <>
      <Link legacyBehavior href={href}>
        <a
          className={`flex items-center space-x-2 pl-8 text-lg font-semibold transition-all ${
            router.pathname.includes(href)
              ? "relative before:absolute before:left-0 before:top-1/2 before:block before:h-10 before:w-1 before:-translate-y-1/2 before:rounded-r-lg before:bg-black before:content-['']"
              : "opacity-50"
          }`}
        >
          {icon}
          <span>{children}</span>
        </a>
      </Link>
    </>
  );
};
export default NavigationLink;
