import React, { useState, useEffect } from 'react';
import cards from '../data/cards.json';

export default function RandomCard({ includeReversed, refreshKey }) {
  const [currentCard, setCurrentCard] = useState(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    const isReversed = Math.random() < 0.5;
    setCurrentCard({ ...card, isReversed });
  };

  useEffect(() => {
    drawCard();
  }, [refreshKey]);

  if (!currentCard) return null;

  const isActuallyReversed = currentCard.isReversed && includeReversed;

  return (
    <div className="flex flex-col bg-purple-900 bg-opacity-60 rounded-lg p-6 max-w-4xl mx-auto my-10 text-gray-100 shadow-lg">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Card Image */}
        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
          <img
            src={currentCard.image}
            alt={currentCard.name}
            className={`max-h-[60vh] object-contain transition-transform duration-300 ${
              isActuallyReversed ? 'rotate-180' : ''
            }`}
            loading="lazy"
          />
        </div>

        {/* Description */}
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 overflow-y-auto max-h-[60vh] pr-2">
          <h2 className="text-3xl font-semibold mb-3 text-purple-300">
            {currentCard.name}
          </h2>
          <p className="mb-4 italic text-gray-300">{currentCard.desc}</p>
          <div>
            <h3 className="font-semibold text-lg mb-1">
              Meaning {isActuallyReversed ? '(Reversed)' : '(Upright)'}
            </h3>
            <p>
              {isActuallyReversed
                ? currentCard.meaning_rev
                : currentCard.meaning_up}
            </p>
          </div>
        </div>
      </div>

      {/* Button aligned below content */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={drawCard}
          className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded shadow transition"
        >
          Draw Another Card
        </button>
      </div>
    </div>
  );
}
