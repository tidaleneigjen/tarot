import { useState, useEffect } from 'react';
import TarotCard from '../components/TarotCard';

export default function RandomCard({ includeReversed, refreshKey, cards }) {
  const [randomCard, setRandomCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (!cards || cards.length === 0) return;

    const cardIndex = Math.floor(Math.random() * cards.length);
    const card = cards[cardIndex];
    const reversed = includeReversed ? Math.random() < 0.5 : false;

    setRandomCard(card);
    setIsReversed(reversed);
  }, [refreshKey, cards]);

  useEffect(() => {
    if (!randomCard) return;

    if (!includeReversed && isReversed) {
      setIsReversed(false);
    } else if (includeReversed && !isReversed) {
      setIsReversed(Math.random() < 0.5);
    }
  }, [includeReversed]);

  return (
    <div className="flex justify-center items-center h-full">
      {randomCard ? (
        <TarotCard
          card={randomCard}
          isReversed={isReversed}
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
