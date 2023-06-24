"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavButtons = [
  { title: "Instagram", link: "/" },
  { title: "YouTube", link: "/1" },
  { title: "TikTok", link: "/2" },
  { title: "Stories", link: "/3" },
];

const Navigation = () => {

  const router = usePathname()

  return (
    <nav className=" w-11/12 mx-auto mt-9 tablet:mb-9 flex justify-between  z-10 relative">
      <div className=" relative uppercase text-black">Fast Save</div>
      <div className=" sm:block hidden">
        {NavButtons.map((item, index) => {
          const isActive = item.link === router;
          return (
            <Link
              key={index}
              className={`text-lg font-medium ml-6 leading-8 mobile:text-sm hover:underline ${
                isActive ? " text-sky-500 " : "text-black"
              }`}
              href={item.link}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
