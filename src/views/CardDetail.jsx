// src/views/CardDetail.jsx
export default function CardDetail({ card }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-6 px-4">
      <img
        src={card.image}
        alt={card.name}
        className="w-[200px] md:w-[300px] shadow-lg rounded"
      />
      <div className="max-w-lg">
        <h2 className="text-2xl font-semibold mb-2">{card.name}</h2>
        <p className="text-sm text-gray-700 italic mb-4">{card.desc}</p>
        <p>
          <strong>Upright:</strong> {card.meaning_up}
        </p>
        <p>
          <strong>Reversed:</strong> {card.meaning_rev}
        </p>
      </div>
    </div>
  );
}
