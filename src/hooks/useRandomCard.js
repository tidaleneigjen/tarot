import { useState, useEffect } from 'react';

export function useRandomCard(cards, includeReversed, refreshKey) {
  const [randomCard, setRandomCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (!cards || cards.length === 0) return;

    const cardIndex = Math.floor(Math.random() * cards.length);
    const card = cards[cardIndex];
    const reversed = includeReversed ? Math.random() < 0.5 : false;

    setRandomCard(card);
    setIsReversed(reversed);
  }, [refreshKey, includeReversed, cards]);

  return { card: randomCard, isReversed };
}
