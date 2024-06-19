import React from 'react'
import Image from 'next/image'
import { FaSteam,  FaXbox, FaPlaystation } from 'react-icons/fa';

const ReqProd3 = () => {
  return (
    <div className="py-10 flex justify-around bg-gray-900 text-white">
    <div className="flex flex-col items-center">
      <Image src="/images/IconProduct3.png" alt="Octopath Traveler 2 Logo" width={150} height={150} />
      <ul className="mt-4 text-left">
        <li>OS: Windows 10 or newer</li>
        <li>Processor: AMD Ryzen 3 1200 / Intel Core i3-6100</li>
        <li>Memory: 8 GB RAM</li>
        <li>Graphics: NVIDIA GeForce GTX 1060 / AMD Radeon RX 470</li>
        <li>DirectX: Version 11</li>
        <li>Storage: 20 GB available space</li>
      </ul>
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4">Available Here</h3>
      <div className="flex space-x-4 text-4xl">
        <FaSteam className="text-gray-500" />
        <FaXbox className="text-gray-500" />
        <FaPlaystation className="text-gray-500" />
      </div>
      <p className="mt-4">All priced at 59.99$</p>
    </div>
  </div>
  )
}

export default ReqProd3