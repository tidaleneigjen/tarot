import { useEffect, useState } from 'react';
import TarotCard from '../components/TarotCard';
import cards from '../data/cards.json';

export default function ThreeCardSpread({ includeReversed = true }) {
  const [spread, setSpread] = useState([]);
  const [isReversedList, setIsReversedList] = useState([]);

  useEffect(() => {
    // Select 3 random cards once on mount
    const selected = [...cards].sort(() => 0.5 - Math.random()).slice(0, 3);

    // Decide reversed once per card (regardless of includeReversed)
    const reversed = selected.map(() => Math.random() < 0.5);

    setSpread(selected);
    setIsReversedList(reversed);
  }, []); // empty dependency array: run once

  return (
    <div className="flex flex-col md:flex-row justify-center gap-6">
      {spread.map((card, i) => (
        <TarotCard
          key={card.name}
          card={card}
          isReversed={includeReversed ? isReversedList[i] : false}
          showText={false}
          showTitle={false}
          className="max-h-[80vh] max-w-xs"
        />
      ))}
    </div>
  );
}
