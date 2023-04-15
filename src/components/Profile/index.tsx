import { activeTabAtom } from "@/src/atoms/activeTabAtom";
import { profileSettingsAtom } from "@/src/atoms/userProfileSettings";
import { socialSettingsAtom } from "@/src/atoms/userSocialSettings";
import { TabsValue } from "@/src/types/tabs";
import { useAtom } from "jotai";
import Image from "next/image";
import Button from "../common/Button";
import Polygon from "../svg/Polygon";
import SocialLinks from "./SocialLinks";

type Props = {};

const Profile = (props: Props) => {
  const [userProfile] = useAtom(profileSettingsAtom);
  const [socials] = useAtom(socialSettingsAtom);
  const [activeTab] = useAtom(activeTabAtom);
  return (
    <>
      <div className="relative mt-8">
        <div className="relative h-52 rounded-t-xl bg-gradient-to-r from-sky-500 to-indigo-500">
          <button className="absolute right-6 top-6 flex items-center space-x-2 rounded-lg border border-indigo-200 bg-indigo-50/20 p-2">
            <Image src="/assets/icons/edit.svg" width={16} height={16} alt="" />
            <span className="text-sm text-gray-50">Edit cover</span>
          </button>
        </div>
        <div className="absolute left-4 top-36">
          <Image
            height={128}
            width={128}
            src="/assets/images/avatar.png"
            alt=""
          />
          <div className="relative">
            <span className="absolute -right-8 -top-16">
              <Polygon />
              <span className="absolute left-1/2 top-1/2 z-50 -translate-x-[50%] -translate-y-[54%] text-sm font-semibold text-gray-50">
                5
              </span>
            </span>
          </div>
        </div>
        <div className="rounded-xl rounded-t-none border border-t-0 border-gray-200 py-10 pl-40 pr-10">
          <div className="flex items-center space-x-4">
            <p className="text-3xl font-bold">
              {userProfile?.name || "Anna Cheng"}
            </p>
            <span className="rounded-md bg-lime-400 px-2 font-semibold text-lime-950">
              Pro
            </span>
            <span className="rounded-md bg-blue-200 px-2 font-semibold text-blue-700">
              Looking for job
            </span>
          </div>
          <div className="mt-2">
            <p className="text-gray-700">
              {userProfile?.about || "Full stack dev at codedamn | Harvard'22"}
            </p>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <Image
              height={16}
              width={16}
              src="/assets/icons/location.svg"
              alt=""
            />
            <p className="text-gray-400">Mumbai, India</p>
          </div>
          <div className="mt-8 space-x-4">
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              HTML 5
            </span>
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              CSS 3
            </span>
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              Javascript
            </span>
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              React
            </span>
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              Python
            </span>
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              C++
            </span>
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              Mongo
            </span>
            <span className="rounded-lg bg-gray-200 px-2 py-2 text-sm font-semibold text-gray-900">
              NodeJs
            </span>
          </div>
          <div className="my-8 h-0.5 bg-gray-100" />
          <div className="flex items-stretch justify-between">
            <div className="flex space-x-4">
              <SocialLinks
                href={socials?.github || "#"}
                imgSrc="/assets/icons/github.svg"
              />
              <SocialLinks
                href={socials?.instagram || "#"}
                imgSrc="/assets/icons/instagram.svg"
              />
              <SocialLinks
                href={socials?.facebook || "#"}
                imgSrc="/assets/icons/facebook.svg"
              />
              <SocialLinks
                href={socials?.linkedin || "#"}
                imgSrc="/assets/icons/linked-in.svg"
              />
              <SocialLinks
                href={socials?.dribbble || "#"}
                imgSrc="/assets/icons/dribbble.svg"
              />
            </div>
            {activeTab === TabsValue.PORTFOLIO ? (
              <div className="flex items-center space-x-4">
                <button className="rounded-lg bg-gray-100 p-2">
                  <Image
                    height={24}
                    width={24}
                    src="/assets/icons/bookmark.svg"
                    alt=""
                  />
                </button>
                <Button style="primary">Contact</Button>
              </div>
            ) : (
              <Button style="secondary">Follow</Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
