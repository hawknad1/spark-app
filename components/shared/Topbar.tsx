import Link from "next/link";
import React from "react";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src={logo} alt="Logo" height={28} width={28} />
        <p className="text-heading3-bold text-light-1 hidden lg:inline-flex">
          Spark
        </p>
      </Link>
      <div className="lg:inline-flex items-center bg-slate-400 p-2 rounded-xl gap-2 hidden ">
        <Image
          src="/assets/search.svg"
          height={22}
          width={22}
          alt="Search"
          className=""
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-white"
        />
      </div>
    </nav>
  );
};

export default Topbar;
