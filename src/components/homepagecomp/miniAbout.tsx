import React from "react";

const MiniAbout = () => {
  return (
    <div className="bg-white min-h-[600px] w-screen">
      <div>
        <h1 className="text-5xl text-center text-black py-10">About us</h1>
        <div className="flex justify-center">
        <img src="/images/logo-b.png" alt="" className="w-[15rem] md:w-fit"/>
        </div>
        <p className="text-md px-5 text-black pt-10 text-justify md:text-center md:px-30 md:text-2xl lg:3xl lg:px-60">
          {" "}
          Arasaki Games Studio is dedicated to creating unforgettable gaming
          experiences. Founded in 2018, we blend innovative design, compelling
          storytelling, and cutting-edge technology to craft games that
          captivate and entertain players around the globe. Our passion for
          gaming drives us to push boundaries and deliver excellence in every
          title we produce.
        </p>
      </div>
    </div>
  );
};

export default MiniAbout;
