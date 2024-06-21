import React from 'react';
import Image from 'next/image';
import { FaSteam, FaXbox, FaPlaystation } from 'react-icons/fa';

const RequirementsProd1SeaOfStars = () => {
  return (
    <div className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center md:items-start md:mr-10">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image src="/images/iconProduct2.png" alt="Sea of Stars Logo" layout="fill" objectFit="contain" />
          </div>
          <ul className="mt-4 text-center md:text-left">
            <li>OS: Windows 10 or newer</li>
            <li>Processor: Intel Core i3</li>
            <li>Memory: 6 GB RAM</li>
            <li>Graphics: NVIDIA GeForce GTX 650</li>
            <li>DirectX: Version 11</li>
            <li>Storage: 5 GB available space</li>
          </ul>
        </div>
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Available Here</h3>
          <div className="flex space-x-4 text-4xl justify-center md:justify-start">
            <FaSteam className="text-gray-500" />
            <FaXbox className="text-gray-500" />
            <FaPlaystation className="text-gray-500" />
          </div>
          <p className="mt-4 text-center md:text-left">All priced at $24.99</p>
        </div>
      </div>
    </div>
  );
}

export default RequirementsProd1SeaOfStars;
