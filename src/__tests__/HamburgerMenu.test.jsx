import { render, screen } from '@testing-library/react';
import HamburgerMenu from '../components/HamburgerMenu';
import cards from '../data/cards.json';

test('renders HamburgerMenu with Views and Cards sections', () => {
  render(<HamburgerMenu onSelect={() => {}} cards={cards} />);
  expect(screen.getByText(/Views/i)).toBeInTheDocument();
  expect(screen.getByText(/Individual Cards/i)).toBeInTheDocument();
});
