import React from 'react';

const ReviewProd1: React.FC = () => {
  const reviews = [
    { text: 'Chained Echoes is simply the best RPG I&#39;ve played in a very, very long time.', score: '10/10', source: 'God is a Geek' },
    { text: 'A New Masterpiece of Turn-Based RPGs', score: '9.5/10', source: 'Noisy Pixel' },
    { text: 'Simply put, Chained Echoes is a heartfelt love letter to the SNES JRPG classics...', score: '9/10', source: 'Gaming Nexus' },
  ];

  return (
    <div className="py-10 bg-gray-900">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">Reviews</h2>
      <div className="flex justify-around">
        {reviews.map((review, index) => (
          <div key={index} className="w-1/3 p-4 bg-gray-800 shadow-md rounded-lg mx-2">
            <p className="italic text-white">&quot;{review.text}&quot;</p>
            <p className="font-bold mt-2 text-white">{review.score} - {review.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewProd1;
