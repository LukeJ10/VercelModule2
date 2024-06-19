import React from 'react'
import Image from 'next/image';
import { FaSteam,  FaXbox, FaPlaystation } from 'react-icons/fa';

const RequirementsProd1 = () => {
  return (
    <div className="py-10 flex justify-around bg-gray-900">
    <div className="flex flex-col items-center">
      <Image src="/images/iconprod1.png" alt="Chained Echoes Logo" width={150} height={150} />
      <ul className="mt-4 text-left">
        <li>OS: Windows 7 or newer</li>
        <li>Processor: Dual Core Processor</li>
        <li>Memory: 4 GB RAM</li>
        <li>Graphics: Radeon R9 200 or equal</li>
        <li>DirectX: Version 11</li>
        <li>Storage: 900 MB available space</li>
      </ul>
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4">Available Here</h3>
      <div className="flex space-x-4 text-4xl">
        <FaSteam className="text-gray-500" />
        {/* <FaGog className="text-gray-500" /> */}
        <FaXbox className="text-gray-500" />
        <FaPlaystation className="text-gray-500" />
      </div>
      <p className="mt-4">All priced at 24.99$</p>
    </div>
  </div>
  )
}

export default RequirementsProd1