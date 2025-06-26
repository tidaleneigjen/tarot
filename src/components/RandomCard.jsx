import React, { useState, useEffect } from "react";

export default function RandomCard({ cards, includeUpsideDown }) {
  const [currentCard, setCurrentCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  // Function to pick a random card with optional upside down
  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];

    // Determine if reversed if toggle is on, otherwise always upright
    const reversed = includeUpsideDown ? Math.random() < 0.5 : false;

    setCurrentCard(card);
    setIsReversed(reversed);
  };

  // Draw a card initially on mount
  useEffect(() => {
    drawCard();
  }, [includeUpsideDown]); // redraw if upside down toggle changes

  if (!currentCard) return null;

  return (
    <div className="flex flex-col md:flex-row items-center bg-purple-900 bg-opacity-60 rounded-lg p-6 max-w-4xl mx-auto my-10 text-gray-100 shadow-lg">
      {/* Card Image */}
      <div className="flex-shrink-0 md:w-1/2 flex justify-center">
        <img
          src={currentCard.image}
          alt={currentCard.name}
          className={`max-h-[60vh] object-contain transition-transform duration-300 ${
            isReversed ? "rotate-180" : ""
          }`}
          loading="lazy"
        />
      </div>

      {/* Description */}
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-3xl font-semibold mb-3 text-purple-300">{currentCard.name}</h2>
        <p className="mb-4 italic text-gray-300">{currentCard.desc}</p>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Meaning {isReversed ? "(Reversed)" : "(Upright)"}
          </h3>
          <p>{isReversed ? currentCard.meaning_rev : currentCard.meaning_up}</p>
        </div>
        <button
          onClick={drawCard}
          className="mt-6 bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded shadow transition"
        >
          Draw Another Card
        </button>
      </div>
    </div>
  );
}