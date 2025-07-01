import TarotCard from './TarotCard';

export default function TarotCardGrid({ cards, isReversedList }) {
  return (
    <div className="three-card-grid">
      {cards.map((card, index) => {
        const isReversed = isReversedList?.[index] || false;
        const meaning = isReversed ? card.meaning_rev : card.meaning_up;

        return (
          <div key={card.name} className="card-wrapper">
            <div className="card-image-box">
              <img
                src={card.image}
                alt={card.name}
                className={isReversed ? 'rotate-180' : ''}
              />
            </div>
            {/* <TarotCard card={card} isReversed={isReversed} showText={false} showTitle={false} /> */}
            <div className="card-hover-text">
              <strong>{card.name}</strong>
              <p>
                <em>{isReversed ? 'Reversed' : 'Upright'}:</em> {meaning}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
