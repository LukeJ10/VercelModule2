import React from 'react';

const ReviewProd3 = () => {
  const reviews = [
    { text: 'Octopath Traveler 2 is a very enjoyable JRPG sequel that feels a little too safe and familiar.', score: '7/10', source: 'IGN' },
    { text: 'Octopath Traveler 2 makes for a satisfying night at the bar. It’s full of pathos and excitement that pushes you forward, and the gameplay is tight and enjoyable.', score: '4/5', source: 'TheGamer' },
    { text: 'The non-linear storytelling, freeform exploration, and strategic combat of Octopath Traveler 2 makes for a challenging and satisfying RPG adventure.', score: '8/10', source: 'GameSpot' },
  ];

  return (
    <div className="py-10 bg-gray-900">
      <h2 className="text-center text-3xl font-bold mb-6">Reviews</h2>
      <div className="flex justify-around">
        {reviews.map((review, index) => (
          <div key={index} className="w-1/3 p-4 bg-gray-800 shadow-md rounded-lg mx-2">
            <p className="italic">"{review.text}"</p>
            <p className="font-bold mt-2">{review.score} - {review.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewProd3;
