import Image from "next/image";
import React from "react";

const Herobar = () => {
  return (
    <div className="flex items-center justify-between p-[6rem] bg-gray-100 min-h-[600px] mt-20 ">
      <div className="flex flex-col gap-0">
      <div className="max-w-lg">
      <h1 className="text-5xl font-bold mb-6 text-black">Arasaki Games Studio</h1>
      <p className="text-lg  text-black">
        Crafting immersive gaming experiences for the passionate player. Join
        us on a journey of creativity, innovation, and unparalleled adventure
        in every game we create.
      </p>
    </div>
    <div className="hidden lg:block md:block max-w-md">
      <img src="/images/egg.png" className="hidden md:hidden lg:block opacity-60 pt-10 mb-0 pb-0 pl-[7rem]" width={350} alt="Arasaki Games Studio" />
    </div> 
      </div>
    <div>
      <img src="/images/hero.png"  className="hidden md:block lg:block max-w-[38rem] align-middle items-start" alt="" />
    </div>
  </div>
  );
};

export default Herobar;
