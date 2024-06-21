import React from 'react';

const reviews = [
  { 
    text: 'Best Indie Game', 
    award: 'Golden Joystick Awards', 
    type: 'Winner' 
  },
  { 
    text: 'Best Role Playing Game', 
    award: 'The Game Awards', 
    type: 'Nominated' 
  },
  { 
    text: 'Best Independent Game', 
    award: 'The Game Awards', 
    type: 'Winner' 
  },
];

const ReviewProd2 = () => {
  return (
    <div className="py-10 bg-gray-900 text-white">
      <h2 className="text-center text-3xl font-bold mb-6">Reviews</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-gray-800 shadow-md rounded-lg">
            <p className="text-lg font-semibold">{review.type}</p>
            <p className="text-xl font-bold mt-2">{review.text}</p>
            <p className="italic mt-2">{review.award}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewProd2;
