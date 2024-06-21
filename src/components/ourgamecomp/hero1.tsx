import Image from "next/image";
import React from "react";

const GamesHero1 = () => {
  return (
    <div className="relative w-full h-64 min-h-[600px] z-0">
      <Image
        src="/images/productHero1.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-end justify-center z-10 text-white bg-black bg-opacity-50 pr-8">
        <div>
        <Image
          src="/images/heroLogo1.png"
          alt="Chained Echoes Logo"
          width={300}
          height={100}
        />
        </div>
        <div className="pl-5 lg:pl-96 md:pl-96">
        <p className="text-md md:text-lg lg:text-lg text-right mt-2 pl-1 lg:pl-96 md:pl-96">
          Embark on an epic journey through a world torn by ancient prophecy.
          Chained Echoes combines classic RPG elements with modern storytelling,
          offering a rich tapestry of adventure, strategy, and unforgettable
          characters. Prepare to forge your legend in a realm where destiny
          echoes with every step.
        </p>
        </div>
      </div>
    </div>
  );
};

export default GamesHero1;
