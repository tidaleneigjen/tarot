import TarotCard from '../components/TarotCard';

export default function CardDetail({ card }) {
  // Always upright in detail view
  return <TarotCard card={card} isReversed={false} />;
}
