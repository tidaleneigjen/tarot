import { render, screen } from '@testing-library/react';
import RandomCard from '../views/RandomCard';
import cards from '../data/cards.json';

describe('RandomCard component', () => {
  test('renders a tarot card image', async () => {
    render(<RandomCard cards={cards} includeReversed={false} refreshKey={0} />);

    // Wait for an image with any known alt text to appear
    const altTexts = cards.map((c) => c.name);

    const image = await screen.findByAltText((alt) => altTexts.includes(alt));

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
});
