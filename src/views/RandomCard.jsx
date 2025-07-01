import { useState, useEffect } from 'react';
import TarotCard from '../components/TarotCard';

export default function RandomCard({ includeReversed, refreshKey, cards }) {
  const [randomCard, setRandomCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  // Pick a new card only when refreshKey or cards change — NOT includeReversed!
  useEffect(() => {
    if (!cards || cards.length === 0) return;

    const cardIndex = Math.floor(Math.random() * cards.length);
    const card = cards[cardIndex];

    // Use includeReversed *only here* to determine reversed status for the new card
    const reversed = includeReversed ? Math.random() < 0.5 : false;

    setRandomCard(card);
    setIsReversed(reversed);
  }, [refreshKey, cards]);

  // When includeReversed toggles, update reversed state of current card only
  useEffect(() => {
    if (!randomCard) return;

    if (!includeReversed && isReversed) {
      setIsReversed(false);
    } else if (includeReversed && !isReversed) {
      setIsReversed(Math.random() < 0.5);
    }
  }, [includeReversed]);

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
