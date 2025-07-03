import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDetail from '../views/CardDetail';
import cards from '../data/cards.json';

test('renders CardDetail with correct card image', () => {
  const card = cards[0];
  render(<CardDetail card={card} />);

  const img = screen.getByAltText(card.name);
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', card.image);
});
