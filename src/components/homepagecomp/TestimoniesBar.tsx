import React from "react";

const TestimoniesBar = () => {
  return (
    <div className="bg-white py-16 min-h-[600px]">
      <h2 className="text-center text-3xl  text-black font-bold mb-12">
        Testimonies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-7 max-w-6xl mx-auto bg-gray-200">
        <div className="bg-gray-300 rounded-lg p-3 flex">
          <div className="w-1/4  flex-shrink-0 ">
            <img
              src="/images/tesA.png"
              alt="testimoni satu"
              className="object-cover "
            />
          </div>
          <div className="w-3/4 ml-4">
            <p className="text-sm leading-relaxed text-black">
              "Arasaki Games Studio has consistently delivered top-notch gaming
              experiences that exceed our expectations. Their creativity and
              attention to detail are unparalleled."
            </p>
          </div>
        </div>
        <div className="bg-gray-300 rounded-lg p-3  flex">
          <div className="w-1/4  flex-shrink-0 ">
            <img
              src="/images/tesB.png"
              alt="testimoni Dua"
              className="object-cover "
            />
          </div>
          <div className="w-3/4 ml-4">
            <p className="text-sm leading-relaxed text-black">
              "Working with Arasaki Games Studio has been a game-changer for us.
              Their innovative approach and dedication to excellence set them
              apart from the competition."
            </p>
          </div>
        </div>
        <div className="bg-gray-300 rounded-lg p-3  flex">
          <div className="w-1/4  flex-shrink-0 ">
            <img
              src="/images/tesC.png"
              alt="testimoni Tiga"
              className="object-cover "
            />
          </div>
          <div className="w-3/4 ml-4">
            <p className="text-sm leading-relaxed text-black">
              "The team at Arasaki Games Studio is incredibly talented and
              professional. Their games are not only visually stunning but also
              highly engaging."
            </p>
          </div>
        </div>
        <div className="bg-gray-300 rounded-lg p-3  flex">
          <div className="w-1/4  flex-shrink-0 ">
            <img
              src="/images/tesD.png"
              alt="testimoni empat"
              className="object-cover "
            />
          </div>
          <div className="w-3/4 ml-4">
            <p className="text-sm leading-relaxed text-black">
              "Arasaki Games Studio's commitment to quality and innovation is
              evident in every project they undertake. We highly recommend
              them."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesBar;
