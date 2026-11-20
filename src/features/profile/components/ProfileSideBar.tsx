'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGear,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function ProfileSideBar() {
    const pathname = usePathname();
      const isSettingsActive = pathname === "/profile/setting";
  const isAdressActive = pathname === "/profile/address";

  return (
    <aside className="w-full md:w-90 h-fit bg-white rounded-[22px] border border-gray-200 shadow-sm overflow-hidden">

      {/* Sidebar Header */}
      <div className="px-5 py-5 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">
          My Account
        </h2>
      </div>

      {/* Sidebar Links */}
      <div className="p-3 space-y-2">

        {/* Active Link */}
        
        <Link href="/profile/address"  className={`flex items-center justify-between rounded-2xl p-4 cursor-pointer hover:bg-green-100 transition
       ${
          isAdressActive ? "text-green-700 bg-green-50" : "text-gray-700"
        } `  }>

          <div  className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-green-500 rounded-xl text-white">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <span className="text-lg text-green-700">
              My Addresses
            </span>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-green-500"
          />
        </Link>

        {/* Settings Link */}
        <Link href="/profile/setting"  className={`flex items-center justify-between rounded-2xl p-4 cursor-pointer hover:bg-green-100 transition
       ${
          isSettingsActive ? "text-green-700 bg-green-50" : "text-gray-700"
        } `  }>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500">
              <FontAwesomeIcon icon={faGear} />
            </div>

        <span >
          Settings
        </span>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-gray-400"
          />
        </Link>

      </div>
    </aside>
  );
}