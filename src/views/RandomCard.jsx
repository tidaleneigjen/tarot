import { useState, useEffect } from 'react';
import TarotCard from '../components/TarotCard';

export default function RandomCard({ includeReversed, refreshKey, cards }) {
  const [randomCard, setRandomCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (!cards || cards.length === 0) return;

    // Select a random card
    const cardIndex = Math.floor(Math.random() * cards.length);
    const card = cards[cardIndex];

    // Determine if reversed is applied
    const reversed = includeReversed ? Math.random() < 0.5 : false;

    setRandomCard(card);
    setIsReversed(reversed);
  }, [refreshKey, includeReversed, cards]);

  return (
    <div>
      {randomCard ? (
        <TarotCard card={randomCard} isReversed={isReversed} />
      ) : (
        <p>Loading card...</p>
      )}
    </div>
  );
}
