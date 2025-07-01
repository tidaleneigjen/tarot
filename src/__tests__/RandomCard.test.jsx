import { render, screen } from '@testing-library/react';
import RandomCard from '../views/RandomCard'; // adjust path if needed
import cards from '../data/cards'; // your card data source

describe('RandomCard component', () => {
  test('renders a card name', async () => {
    // Provide the cards array and other required props
    render(<RandomCard cards={cards} includeReversed={false} refreshKey={0} />);

    // card names for matching
    const cardNames = cards.map((c) => c.name);

    // Wait for the card name to appear in the document
    const cardElement = await screen.findByText((text) =>
      cardNames.includes(text)
    );

    expect(cardElement).toBeInTheDocument();
  });
});
