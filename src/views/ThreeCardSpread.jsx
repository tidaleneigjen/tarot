import { useEffect, useState } from 'react';
import TarotCard from '../components/TarotCard';
import cards from '../data/cards.json';

export default function ThreeCardSpread({ includeReversed = true }) {
  const [spread, setSpread] = useState([]);
  const [isReversedList, setIsReversedList] = useState([]);

  useEffect(() => {
    // Randomly select 3 cards
    const selected = [...cards].sort(() => 0.5 - Math.random()).slice(0, 3);

    // Decide if each card is reversed or not
    const reversed = selected.map(() =>
      includeReversed ? Math.random() < 0.5 : false
    );

    setSpread(selected);
    setIsReversedList(reversed);
  }, [includeReversed]);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-6">
      {spread.map((card, i) => (
        <TarotCard
          key={card.name}
          card={card}
          isReversed={isReversedList[i]}
          showText={false}
          showTitle={false}
          className="max-h-[80vh] max-w-xs"
        />
      ))}
    </div>
  );
}
