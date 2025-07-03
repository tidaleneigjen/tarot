import { useEffect, useState } from 'react';
import TarotCard from '../components/TarotCard';

export default function RandomCard({ includeReversed, refreshKey, cards }) {
  const [randomCard, setRandomCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (!cards || cards.length === 0) return;

    const cardIndex = Math.floor(Math.random() * cards.length);
    const card = cards[cardIndex];
    const reversed = Math.random() < 0.5; // decide reversed once per refresh

    setRandomCard(card);
    setIsReversed(reversed);
  }, [refreshKey, cards]);

  // Display reversed only if includeReversed is true
  const displayReversed = includeReversed ? isReversed : false;

  return (
    <div className="flex justify-center items-center h-full">
      {randomCard ? (
        <TarotCard
          card={randomCard}
          isReversed={displayReversed}
          showTitle={false}
          showText={false}
          className="max-h-[90vh]"
        />
      ) : (
        <p>Loading card...</p>
      )}
    </div>
  );
}
