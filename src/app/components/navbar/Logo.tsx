"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      alt="logo"
      height="100"
      width="100"
    />
  );
};

export default Logo;
