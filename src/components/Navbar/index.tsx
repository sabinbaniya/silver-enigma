import Image from "next/image";
import Link from "next/link";
import Polygon from "../svg/Polygon";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex h-20 w-11/12 max-w-7xl items-center justify-between">
        <Link legacyBehavior href="/">
          <a className="text-lg font-bold">codedamn</a>
        </Link>
        <div className="flex items-center space-x-10">
          <div>
            <div className="relative flex h-11 items-center rounded-lg border border-gray-200 pl-10">
              <Image
                height={20}
                width={20}
                src="/assets/icons/search.svg"
                alt=""
                className="absolute left-2 top-1/2 -translate-y-1/2"
              />
              <input
                type="text"
                className="-bg-red-300 pr-2 focus:outline-none"
                placeholder="Search"
              />
              <button className="mr-1 flex h-9 items-center justify-between space-x-1 rounded-md bg-gray-100 px-2 text-gray-500">
                <span>Courses</span>
                <Image
                  height={16}
                  width={16}
                  src="/assets/icons/arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Image
                height={20}
                width={20}
                src="/assets/icons/bolt.svg"
                alt=""
              />
              <span className="text-lg font-semibold text-gray-500">2</span>
            </div>
            <div className="relative flex space-x-2">
              <Image
                height={24}
                width={24}
                src="/assets/icons/bell.svg"
                alt=""
              />
              <span className="absolute -top-0.5 left-1 grid h-4 w-4 place-items-center rounded-full bg-[#EC4899] text-xs font-semibold text-gray-50">
                1
              </span>
            </div>
            <Link href="/settings/profile">
              <div className="relative flex space-x-2">
                <Image
                  height={32}
                  width={32}
                  src="/assets/images/avatar.png"
                  alt=""
                />
                <span className="absolute -right-10 -top-10">
                  <span className="relative">
                    <Polygon className="scale-[0.7]" />
                    <span className="absolute left-1/2 top-1/2 z-50 -translate-x-[50%] -translate-y-[54%] text-xs font-semibold text-gray-50">
                      5
                    </span>
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
