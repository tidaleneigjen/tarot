import React from 'react';

// export default function TarotCard({ card }) {
//   if (!card) return null;

//   return (
//     <div className="card">
//       <h2>{card.name}</h2>
//       <img src={card.image} alt={card.name} style={{ width: '200px' }} />
//       <p>{card.meaning_up}</p>
//     </div>
//   );
// }

export default function TarotCard({ card }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-row bg-white shadow-lg rounded-xl p-6 max-w-5xl w-full">
        {/* Image Section */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={card.image}
            alt={card.name}
            className="max-h-[80vh] object-contain"
          />
        </div>

        {/* Description Section */}
        <div className="w-1/2 px-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{card.name}</h2>
          <p className="text-gray-700 mb-4 italic">{card.desc}</p>
          <div className="mt-4">
            <p className="font-semibold">Upright Meaning:</p>
            <p className="text-sm text-gray-600 mb-2">{card.meaning_up}</p>
            <p className="font-semibold">Reversed Meaning:</p>
            <p className="text-sm text-gray-600">{card.meaning_rev}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
