import React from "react";
import Image from "next/image";

const HeroProd3: React.FC = () => {
  return (
    <div className="relative w-full min-h-[600px] md:min-h-[800px] z-0">
      <Image
        src="/images/HeroProduct3.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center z-10 text-white bg-black bg-opacity-50 px-4 md:pl-8">
        <div className="text-center md:text-left max-w-3xl">
          <Image
            src="/images/Herologo3.png"
            alt="Sea of Stars Logo"
            width={300}
            height={100}
          />
          <p className="text-lg mt-4 md:mt-2 pl-3 md:pl-0 pr-4 md:pr-96">
            Return to the enchanting world of Orsterra in Octopath Traveler 2,
            where eight heroes' paths converge once more in a tale of bravery,
            betrayal, and destiny. With expanded lore, new lands to explore, and
            intricate strategic gameplay, forge alliances and shape the future in
            this captivating RPG sequel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroProd3;
