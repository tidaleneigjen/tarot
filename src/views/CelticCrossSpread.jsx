import { useEffect, useState } from 'react';
import cards from '../data/cards.json';
import TarotCard from '../components/TarotCard';

export default function CelticCrossSpread({ includeReversed = true }) {
  const [spread, setSpread] = useState([]);
  const [reversed, setReversed] = useState([]);

  useEffect(() => {
    const selected = [...cards].sort(() => 0.5 - Math.random()).slice(0, 10);
    const reversedFlags = selected.map(() =>
      includeReversed ? Math.random() < 0.5 : false
    );
    setSpread(selected);
    setReversed(reversedFlags);
  }, [includeReversed]);

  if (spread.length < 10) return null;

  const [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
  ] = spread;
  const [rev1, rev2, rev3, rev4, rev5, rev6, rev7, rev8, rev9, rev10] =
    reversed;

  const cardSizeClass = 'w-40 md:w-48'; // ~160-192px width

  return (
    <div className="grid grid-cols-4 h-screen max-w-7xl mx-auto gap-4 px-4 py-8">
      {/* Column 1 (Removed) */}

      {/* Column 1 (now actual col 1) - Card 3 (left of center stack) */}
      <div className="flex items-center justify-center">
        <TarotCard
          card={card3}
          isReversed={rev3}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
      </div>

      {/* Column 2 - Center stack: 6 (top), 1 (center), 5 (bottom) */}
      <div className="flex flex-col justify-center items-center space-y-4">
        <TarotCard
          card={card6}
          isReversed={rev6}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
        <TarotCard
          card={card1}
          isReversed={rev1}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
        <TarotCard
          card={card5}
          isReversed={rev5}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
      </div>

      {/* Column 3 - Card 4 (right of center stack) */}
      <div className="flex items-center justify-center">
        <TarotCard
          card={card4}
          isReversed={rev4}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
      </div>

      {/* Column 4 - Right-side vertical stack: cards 7 to 10 */}
      <div className="flex flex-col justify-center items-center space-y-4">
        <TarotCard
          card={card7}
          isReversed={rev7}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
        <TarotCard
          card={card8}
          isReversed={rev8}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
        <TarotCard
          card={card9}
          isReversed={rev9}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
        <TarotCard
          card={card10}
          isReversed={rev10}
          showTitle={false}
          showText={false}
          className={cardSizeClass}
        />
      </div>
    </div>
  );
}
