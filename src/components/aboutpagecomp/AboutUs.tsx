"use client"
import { ConspiracyContent, conspiracyContent } from '@/utils/conspiracyContent';
import React, { useState } from 'react'

const AboutUs: React.FC = () => {
  const [conspiracyMode, setConspiracyMode] = useState(false);

  const handleToggleConspiracyMode = () => {
    setConspiracyMode(!conspiracyMode);
  };

  const regularContent = {
    paragraphs: [
      'At Arasaki Games Studio, we believe that games are more than just entertainment—they\'re an art form that can inspire, challenge, and connect people from all walks of life.',
      'We strive to push the boundaries of what’s possible in gaming. Through innovative design, compelling storytelling, and cutting-edge technology, we aim to create worlds that captivate and entertain.',
      'From our humble beginnings to our current state-of-the-art studio, Arasaki Games Studio has grown thanks to the passion and dedication of our talented team.'
    ],
    title: 'Our Values',
    values: [
      'Innovation: Constantly pushing the envelope to deliver fresh and exciting gameplay experiences.',
      'Quality: Ensuring every game meets the highest standards of excellence.',
      'Community: Building a loyal and engaged player community through inclusivity and interaction.',
      'Passion: Driven by a love for gaming and a desire to share that passion with the world.'
    ]
  };

  const content: ConspiracyContent = conspiracyMode ? conspiracyContent : regularContent;

  return (
    <div className={`min-h-screen bg-gray-300 ${conspiracyMode ? 'text-white' : 'text-black'} flex flex-col justify-center items-center pt-20`}>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold mt-10 mb-6">About Arasaki Games Studio</h1>
        <div className="max-w-3xl mx-auto">
          {content.paragraphs.map((paragraph, index) => (
            <p className="text-lg mb-8" key={index}>{paragraph}</p>
          ))}
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <ul className="text-lg mb-8 list-disc list-inside">
            {content.values.map((value, index) => (
              <li className="mb-2" key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="w-full h-16 flex justify-center items-center border-t cursor-pointer" onClick={handleToggleConspiracyMode}>
        <p className="text-center">© {new Date().getFullYear()} Arasaki Games Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
