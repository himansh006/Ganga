import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-primaryBlue text-white-800 py-2 flex items-center">
      <nav className="container mx-auto flex flex-row justify-between items-center">
        <div>
          <Image
            src="/dummyLogo.avif"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>

        <div
          style={{
            textWrap: "balance",
          }}
          className="text-xl font-medium text-center"
        >
          Ganga Flood Early Warning System & Inundation Forecast
        </div>

        <div className="text-sm font-extralight cursor-pointer hover:text-white-800/80 transition-all duration-200">Contact Us</div>
      </nav>
    </div>
  );
}
