import React from 'react';

const ReviewProd3: React.FC = () => {
  const reviews = [
    { text: 'Octopath Traveler 2 is a very enjoyable JRPG sequel that feels a little too safe and familiar.', score: '7/10', source: 'IGN' },
    { text: 'Octopath Traveler 2 makes for a satisfying night at the bar. It&apos;s full of pathos and excitement that pushes you forward, and the gameplay is tight and enjoyable.', score: '4/5', source: 'TheGamer' },
    { text: 'The non-linear storytelling, freeform exploration, and strategic combat of Octopath Traveler 2 makes for a challenging and satisfying RPG adventure.', score: '8/10', source: 'GameSpot' },
  ];

  return (
    <div className="py-10 bg-gray-900">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">Reviews</h2>
      <div className="flex flex-col md:flex-row justify-around">
        {reviews.map((review, index) => (
          <div key={index} className="w-full md:w-1/3 p-4 bg-gray-800 shadow-md rounded-lg mb-4 md:mb-0 mx-2">
            <p className="italic text-white">"{review.text}"</p>
            <p className="font-bold mt-2 text-white">{review.score} - {review.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewProd3;
