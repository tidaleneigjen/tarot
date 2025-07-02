import TarotCard from '../components/TarotCard';

export default function CardDetail({ card }) {
  if (!card) return null;

  return (
    <div className="flex justify-center items-center h-full">
      <TarotCard
        card={card}
        isReversed={false} // or pass a prop if you track reversed here
        showText={false}
        showTitle={false}
        className="max-h-[80vh] max-w-xs"
      />
    </div>
  );
}
