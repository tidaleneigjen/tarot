// src/components/TarotCard.jsx
import React from 'react';

export default function TarotCard({ card, isReversed = false, onRedraw }) {
  if (!card) return null;

  return (
    <div className="flex flex-col md:flex-row items-center bg-purple-900 bg-opacity-60 rounded-lg p-6 max-w-4xl mx-auto my-10 text-gray-100 shadow-lg">
      {/* Card Image */}
      <div className="flex-shrink-0 md:w-1/2 flex justify-center">
        <img
          src={card.image}
          alt={card.name}
          className={`max-h-[60vh] object-contain transition-transform duration-300 ${
            isReversed ? 'rotate-180' : ''
          }`}
          loading="lazy"
        />
      </div>

      {/* Description */}
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 overflow-y-auto max-h-[70vh] pr-2">
        <h2 className="text-3xl font-semibold mb-3 text-purple-300">{card.name}</h2>
        <p className="mb-4 italic text-gray-300">{card.desc}</p>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Meaning {isReversed ? '(Reversed)' : '(Upright)'}
          </h3>
          <p>{isReversed ? card.meaning_rev : card.meaning_up}</p>
        </div>

        {onRedraw && (
          <button
            onClick={onRedraw}
            className="mt-6 bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded shadow transition"
          >
            Draw Another Card
          </button>
        )}
      </div>
    </div>
  );
}
