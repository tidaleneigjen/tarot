import { useEffect, useState } from 'react';
import cards from '../data/cards.json';
import TarotCard from '../components/TarotCard';

export default function CelticCrossSpread({ includeReversed = true }) {
  const [spread, setSpread] = useState([]);
  const [isReversedList, setIsReversedList] = useState([]);

  useEffect(() => {
    // Pick 10 unique cards
    const selected = [...cards].sort(() => 0.5 - Math.random()).slice(0, 10);

    // Random reversed flags
    const reversed = selected.map(() =>
      includeReversed ? Math.random() < 0.5 : false
    );

    setSpread(selected);
    setIsReversedList(reversed);
  }, [includeReversed]);

  return (
    <div className="flex w-full h-full justify-center items-center gap-4">
      {/* Cross section */}
      <div className="flex flex-col justify-center gap-4">
        {/* Card 6 */}
        <div className="flex justify-center">
          <TarotCard
            card={spread[5]}
            isReversed={isReversedList[5]}
            showText={false}
            showTitle={false}
            height="200px"
          />
        </div>

        {/* Cards 3, 1, 4 */}
        <div className="flex justify-center gap-4">
          <TarotCard
            card={spread[2]}
            isReversed={isReversedList[2]}
            showText={false}
            showTitle={false}
            height="200px"
          />
          <TarotCard
            card={spread[0]}
            isReversed={isReversedList[0]}
            showText={false}
            showTitle={false}
            height="200px"
          />
          <TarotCard
            card={spread[3]}
            isReversed={isReversedList[3]}
            showText={false}
            showTitle={false}
            height="200px"
          />
        </div>

        {/* Card 5 */}
        <div className="flex justify-center">
          <TarotCard
            card={spread[4]}
            isReversed={isReversedList[4]}
            showText={false}
            showTitle={false}
            height="200px"
          />
        </div>
      </div>

      {/* Staff section */}
      <div className="flex flex-col justify-center gap-4">
        {[6, 7, 8, 9].map((i) => (
          <TarotCard
            key={i}
            card={spread[i]}
            isReversed={isReversedList[i]}
            showText={false}
            showTitle={false}
            height="200px"
          />
        ))}
      </div>
    </div>
  );
}
