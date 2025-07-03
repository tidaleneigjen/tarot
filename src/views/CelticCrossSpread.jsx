import { useEffect, useState } from 'react';
import cards from '../data/cards.json';
import TarotCard from '../components/TarotCard';

export default function CelticCrossSpread({ includeReversed = true }) {
  const [spread, setSpread] = useState([]);
  const [isReversedList, setIsReversedList] = useState([]);

  useEffect(() => {
    // Pick 10 unique cards once on mount
    const selected = [...cards].sort(() => 0.5 - Math.random()).slice(0, 10);

    // Decide reversed once per card (regardless of includeReversed)
    const reversed = selected.map(() => Math.random() < 0.5);

    setSpread(selected);
    setIsReversedList(reversed);
  }, []); // run once

  return (
    <div className="spread-layout">
      <div className="flex gap-8 items-center">
        {/* Cross section */}
        <div className="flex flex-col items-center gap-4 self-center">
          {/* Card 6 (top) */}
          <TarotCard
            card={spread[5]}
            isReversed={includeReversed ? isReversedList[5] : false}
            showText={false}
            showTitle={false}
            height="200px"
          />

          {/* Middle row: Cards 3, 1+2 overlay, 4 */}
          <div className="flex gap-4 items-center justify-center relative">
            <TarotCard
              card={spread[2]}
              isReversed={includeReversed ? isReversedList[2] : false}
              showText={false}
              showTitle={false}
              height="200px"
            />

            {/* Card 1 with Card 2 overlaid */}
            <div className="mx-8">
              <div className="relative">
                <TarotCard
                  card={spread[0]}
                  isReversed={includeReversed ? isReversedList[0] : false}
                  showText={false}
                  showTitle={false}
                  height="200px"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                  <TarotCard
                    card={spread[1]}
                    isReversed={includeReversed ? isReversedList[1] : false}
                    showText={false}
                    showTitle={false}
                    height="200px"
                    className="transform rotate-90 scale-90"
                  />
                </div>
              </div>
            </div>

            <TarotCard
              card={spread[3]}
              isReversed={includeReversed ? isReversedList[3] : false}
              showText={false}
              showTitle={false}
              height="200px"
            />
          </div>

          {/* Card 5 (bottom) */}
          <TarotCard
            card={spread[4]}
            isReversed={includeReversed ? isReversedList[4] : false}
            showText={false}
            showTitle={false}
            height="200px"
          />
        </div>

        {/* Staff section */}
        <div className="flex flex-col gap-4 self-center">
          {[6, 7, 8, 9].map((i) => (
            <TarotCard
              key={i}
              card={spread[i]}
              isReversed={includeReversed ? isReversedList[i] : false}
              showText={false}
              showTitle={false}
              height="200px"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
