export default function TarotCard({
  card,
  isReversed,
  showText = true,
  showTitle = true,
  className = '',
}) {
  if (!card) return null;

  return (
    <div className={`flex flex-col items-center mx-auto ${className}`}>
      {showTitle && (
        <h2 className="card-name text-center max-w-xs">{card.name}</h2>
      )}
      <div className="tarot-card-container">
        <div className="card-image-wrapper">
          <img
            src={card.image}
            alt={card.name}
            loading="lazy"
            className={`max-h-[400px] md:max-h-[500px] ${
              isReversed ? 'rotate-180' : ''
            }`}
          />
        </div>

        {showText && (
          <div className="meanings-container max-w-xs">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-1">Meaning (Upright)</h3>
              <p>{card.meaning_up}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Meaning (Reversed)</h3>
              <p>{card.meaning_rev}</p>
            </div>
          </div>
        )}
      </div>

      {showText && <p className="card-description max-w-xs">{card.desc}</p>}
    </div>
  );
}
