import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="logo"
        width={147}
        height={30}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
