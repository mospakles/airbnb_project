"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      src="/images/placeholder.jpg"
      alt="placeholder"
      height="30"
      width="30"
    />
  );
};

export default Avatar;
