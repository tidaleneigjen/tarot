import React from 'react';
import { render, screen } from '@testing-library/react';
import TarotCard from '../components/TarotCard';
import cards from '../data/cards.json';

describe('TarotCard component', () => {
  const card = cards.find((c) => c.desc && c.meaning_up && c.meaning_rev);

  test('renders TarotCard with reversed meaning and description', () => {
    const card = {
      name: 'The Fool',
      meaning_rev: 'Recklessness, taken advantage of, inconsideration',
      desc: `With light step, as if earth and its trammels had little power to restrain him, ...`, // rest of it
    };

    render(<TarotCard card={card} isReversed={true} />);

    expect(screen.getByText('Meaning (Reversed)')).toBeInTheDocument();
    expect(screen.getByText(card.meaning_rev)).toBeInTheDocument();
    expect(screen.getByText(/With light step/i)).toBeInTheDocument(); // <-- FIXED
  });

  test('applies rotation class when reversed', () => {
    const { container } = render(<TarotCard card={card} isReversed={true} />);
    const img = container.querySelector('img');
    expect(img.classList.contains('rotate-180')).toBe(true);
  });
});
