import React, { useState, useEffect } from 'react';
import cards from '../data/cards.json';
import TarotCard from '../components/TarotCard';

export default function RandomCard({ includeReversed, refreshKey }) {
  const [currentCard, setCurrentCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    const reversed = includeReversed ? Math.random() < 0.5 : false;
    setCurrentCard(card);
    setIsReversed(reversed);
  };

  useEffect(() => {
    drawCard();
  }, [refreshKey, includeReversed]);

  return (
    <TarotCard
      card={currentCard}
      isReversed={isReversed}
      onRedraw={drawCard}
    />
  );
}
