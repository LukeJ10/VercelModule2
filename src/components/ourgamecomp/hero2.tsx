import React from "react";
import Image from "next/image";

const HeroProd3 = () => {
  return (
    <div className="relative w-full h-64 md:h-[600px] z-0">
      <Image
        src="/images/ProductHero2.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center z-10 text-white bg-black bg-opacity-50 px-4 md:pl-8">
        <div className="text-center md:text-left max-w-3xl">
          <Image
            src="/images/Herologo2.png"
            alt="Sea of Stars Logo"
            width={300}
            height={100}
          />
          <p className="text-lg mt-4 md:mt-2 pl-3 md:pl-0 pr-4 md:pr-96">
            Dive into Sea of Stars, where the cosmos and the ocean collide in a
            celestial tale of magic and exploration. As voyagers across the
            stellar seas, unravel mysteries, harness celestial powers, and chart
            your own course in a vast, enchanting universe. Your adventure
            awaits beneath the starlit waves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroProd3;
