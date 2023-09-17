"use client";
import { bottombarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="fixed bottom-0 z-10 rounded-t-3xl w-full bg-glassmorphism xs:px-7 md:hidden p-4 backdrop-blur-lg">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
        {bottombarLinks.map(({ route, label, icon: imgUrl }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;

          return (
            <Link
              key={label}
              href={route}
              className={`${
                isActive && "bg-[#5E6061] bg-opacity-40"
              } leftsidebar_link`}
            >
              <Image
                src={imgUrl}
                width={24}
                height={24}
                alt="Navigation icon"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
