"use client"

import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();


  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm z-10">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/logo.png"
            alt="greenie"
            width="120" 
            height="120"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-green-100 text-green-500"
                : "text-gray-400 hover:bg-green-100 hover:text-green-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/create">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/dashboard"
                ? "bg-green-100 text-green-500"
                : "text-gray-400 hover:bg-green-100 hover:text-green-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Create User</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
