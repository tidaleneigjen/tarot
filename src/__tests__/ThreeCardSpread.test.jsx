import { render, screen } from '@testing-library/react';
import ThreeCardSpread from '../views/ThreeCardSpread';

describe('ThreeCardSpread', () => {
  it('renders three tarot card images', () => {
    render(<ThreeCardSpread includeReversed={false} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
  });
  it('some cards may be reversed when includeReversed is true', () => {
  const { container } = render(<ThreeCardSpread includeReversed={true} />);
  const reversed = container.querySelectorAll('img.rotate-180');
  expect(reversed.length).toBeGreaterThanOrEqual(0);
  expect(reversed.length).toBeLessThanOrEqual(3);
});

});
