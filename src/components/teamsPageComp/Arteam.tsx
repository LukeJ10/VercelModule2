"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// Define the interface for a team member
interface TeamMember {
  name: string;
  location: string;
  picture: string;
}

const ArtTeamComp = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=6");
        const members = response.data.results.map((result: any) => ({
          name: `${result.name.first} ${result.name.last}`,
          location: `${result.location.city}, ${result.location.country}`,
          picture: result.picture.medium, // Using medium size image
        }));
        setTeamMembers(members);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="bg-white py-5 w-screen min-h-[600px]">
      <div>
        <h3 className="text-center text-2xl font-semibold mb-8 text-black">
          The Art Team
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-300 shadow-lg rounded-lg p-6 max-w-xs text-center"
            >
              <div className="relative flex items-center justify-center">
                <Image
                  className="rounded-full border-4 border-gray-200 object-cover"
                  src={member.picture}
                  alt={`${member.name}'s avatar`}
                  width={128}
                  height={128}
                />
              </div>
              <h4 className="text-black text-xl font-semibold mt-4 mb-2">
                {member.name}
              </h4>
              <p className="text-gray-500">Location: {member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtTeamComp;
