import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDetail from '../views/CardDetail';
import cards from '../data/cards.json';

test('renders CardDetail with given card', () => {
  const card = cards[0];
  render(<CardDetail card={card} />);
  expect(screen.getByText(card.name)).toBeInTheDocument();
});
