import Card from "@/src/components/common/Card";
import { ReactNode } from "react";
import { FaPortrait } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import NavigationLink from "./NavigationLink";

interface Props {
  children: ReactNode;
}

const SettingsLayout = ({ children }: Props) => {
  return (
    <>
      <div className="mx-auto flex w-11/12 max-w-7xl">
        <aside className="h-min basis-1/5 pt-10">
          <Card>
            <div className="relative flex flex-col space-y-6 py-8 ">
              <NavigationLink
                href="/settings/profile"
                icon={<HiUserCircle className="text-xl" />}
              >
                Profile
              </NavigationLink>
              <NavigationLink
                href="/settings/socials"
                icon={<IoShareSocialSharp className="text-lg" />}
              >
                Socials
              </NavigationLink>
              <NavigationLink
                href="/settings/portfolio"
                icon={<FaPortrait className="text-lg" />}
              >
                Portfolio
              </NavigationLink>
              <NavigationLink
                href="/settings/resume"
                icon={<IoIosPaper className="text-lg" />}
              >
                Resume
              </NavigationLink>
            </div>
          </Card>
        </aside>
        <main className="basis-4/5 px-16 py-10">{children}</main>
      </div>
    </>
  );
};
export default SettingsLayout;
