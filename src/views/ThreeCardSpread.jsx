import { useEffect, useState } from 'react';
import cards from '../data/cards.json';
import TarotCardGrid from '../components/TarotCardGrid';

export default function ThreeCardSpread({ includeReversed = true }) {
  const [spread, setSpread] = useState([]);
  const [isReversedList, setIsReversedList] = useState([]);

  useEffect(() => {
    const selected = [...cards].sort(() => 0.5 - Math.random()).slice(0, 3);

    const reversed = selected.map(() =>
      includeReversed ? Math.random() < 0.5 : false
    );

    setSpread(selected);
    setIsReversedList(reversed);
  }, [includeReversed]);

  return (
    <div>
      <TarotCardGrid cards={spread} isReversedList={isReversedList} />
    </div>
  );
}
