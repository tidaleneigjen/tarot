export default function TarotCard({ card, isReversed }) {
  if (!card) return null;

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
      <h2 className="card-name text-center">{card.name}</h2>
      <div className="tarot-card-container">
        <div className="card-image-wrapper">
          <img
            src={card.image}
            alt={card.name}
            loading="lazy"
            className={isReversed ? 'rotate-180' : ''}
          />
        </div>
        <div className="meanings-container">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-1">Meaning (Upright)</h3>
            <p>{card.meaning_up}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Meaning (Reversed)</h3>
            <p>{card.meaning_rev}</p>
          </div>
        </div>
      </div>
      <p className="card-description">{card.desc}</p>
    </div>
  );
}
