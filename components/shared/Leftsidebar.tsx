"use client";
import { sidebarLinks } from "../../constants/index";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Leftsidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map(({ route, icon: imgUrl, label }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;
          return (
            <Link
              href={route}
              key={label}
              className={`${
                isActive && "bg-[#5E6061] bg-opacity-40"
              } leftsidebar_link hover:bg-opacity-40 hover:bg-[#5E6061]`}
            >
              <Image
                src={imgUrl}
                alt="Navigation Icon"
                height={24}
                width={24}
              />
              <p className="text-light-1 max-lg:hidden">{label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6  gap-4 p-4 cursor-pointer ">
        <div className="hover:bg-opacity-40 hover:bg-[#5E6061] flex items-center p-3 gap-3 rounded-lg">
          <Image src="/assets/logout.svg" alt="Logout" height={24} width={24} />
          <p className="text-light-1 hidden lg:inline-flex ">Logout</p>
        </div>
      </div>
    </section>
  );
};

export default Leftsidebar;
