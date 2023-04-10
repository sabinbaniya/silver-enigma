import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
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
        </div>
        <div className="rounded-xl rounded-t-none border border-t-0 border-gray-200 py-10 pl-40 pr-10">
          <div className="flex items-center space-x-4">
            <p className="text-3xl font-bold">Anna Cheng</p>
            <span className="rounded-md bg-lime-400 px-2 font-semibold text-lime-950">
              Pro
            </span>
            <span className="rounded-md bg-blue-200 px-2 font-semibold text-blue-700">
              Looking for job
            </span>
          </div>
          <div className="mt-2">
            <p className="text-gray-700">
              Full stack dev at codedamn | Harvard&apos;22
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
              <div className="rounded-lg border-2 border-gray-200 p-2">
                <Image
                  height={24}
                  width={24}
                  src="/assets/icons/google.svg"
                  alt=""
                />
              </div>
              <div className="rounded-lg border-2 border-gray-200 p-2">
                <Image
                  height={24}
                  width={24}
                  src="/assets/icons/instagram.svg"
                  alt=""
                />
              </div>
              <div className="rounded-lg border-2 border-gray-200 p-2">
                <Image
                  height={24}
                  width={24}
                  src="/assets/icons/facebook.svg"
                  alt=""
                />
              </div>
              <div className="rounded-lg border-2 border-gray-200 p-2">
                <Image
                  height={24}
                  width={24}
                  src="/assets/icons/linkedin.svg"
                  alt=""
                />
              </div>
              <div className="rounded-lg border-2 border-gray-200 p-2">
                <Image
                  height={24}
                  width={24}
                  src="/assets/icons/youtube.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-gray-100 p-2">
                <Image
                  height={24}
                  width={24}
                  src="/assets/icons/bookmark.svg"
                  alt=""
                />
              </button>
              <button className="rounded-lg bg-indigo-600 p-2 px-4 font-semibold text-indigo-50">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
