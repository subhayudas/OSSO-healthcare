// components/Footer/FooterLogo.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterLogo: React.FC = () => {
  return (
    <Link href="/" aria-label="OSSO Home">
      <div className="py-2 px-4 rounded-lg w-fit flex items-center justify-center gap-4">
        <Image
          src="/images/ossologo.svg"
          alt="OSSO Logo"
          width={50}
          height={50}
        />
        <h2 className="font-bold text-3xl tracking-tight ">OSSO</h2>
      </div>
    </Link>
  );
};

export default FooterLogo;
