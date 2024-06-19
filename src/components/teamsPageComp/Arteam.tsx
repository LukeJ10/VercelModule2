"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ArtTeamComp = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
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
    <div className="bg-white py-5 w-full min-h-[600px]">
        <div>
          <h3 className="text-center text-2xl font-semibold mb-8 text-black">
            The Art Team
          </h3>
        </div>
      <div className="flex flex-col justify-center items-center py-5 flex-shrink-0 ">
        <div className="grid grid-cols-3 gap-4 ">
          {teamMembers.map((member: any, index: any) => (
            <div
              key={index}
              className="bg-gray-300 shadow-lg rounded-lg p-6 max-w-xs text-center"
            >
              <div className="relative flex items-center justify-center">
                <img
                  className="rounded-full border-4 border-gray-200 w-32 h-32 object-cover"
                  src={member.picture}
                  alt={`${member.name}'s avatar`}
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
