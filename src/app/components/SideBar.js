"use client"

import React from 'react'
import Link from 'next/link';
import { PencilSquareIcon, UserIcon, UserGroupIcon, FolderOpenIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const SideBar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-start mt-6 mb-14 overflow-hidden">

      <Image
        src="/logo.png"
        alt="greenie"
        width="128"
        height="40"
      />

      <div className="flex flex-col mt-10">
        <Link href="/">
          <div
            className={`px-3 py-3 mx-3 lg:pl-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-green-100 text-green-500"
              : "text-gray-700 hover:bg-green-100 hover:text-green-500"
              }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Users</p>
            </div>
          </div>
        </Link>
        
        <Link href="/create">
          <div
            className={`px-3 py-3 mx-3 lg:pl-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/create"
              ? "bg-green-100 text-green-500"
              : "text-gray-700 hover:bg-green-100 hover:text-green-500"
              }`}
          >
            <div className="mr-2">
              <PencilSquareIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Create</p>
            </div>
          </div>
        </Link>

        <Link href="/">
          <div
            className={`px-3 py-3 mx-3 lg:pl-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-green-100 text-green-500"
              : "text-gray-700 hover:bg-green-100 hover:text-green-500"
              }`}
          >
            <div className="mr-2">
              <UserGroupIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Teams</p>
            </div>
          </div>
        </Link>


        <Link href="/">
          <div
            className={`px-3 py-3 mx-3 lg:pl-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-green-100 text-green-500"
              : "text-gray-700 hover:bg-green-100 hover:text-green-500"
              }`}
          >
            <div className="mr-2">
              <FolderOpenIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Boards</p>
            </div>
          </div>
        </Link>


        <Link href="/">
          <div
            className={`px-3 py-3 mx-3 lg:pl-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-green-100 text-green-500"
              : "text-gray-700 hover:bg-green-100 hover:text-green-500"
              }`}
          >
            <div className="mr-2">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Calendar</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar