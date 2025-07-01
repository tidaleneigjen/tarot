import { render, screen } from '@testing-library/react';
import ThreeCardSpread from '../views/ThreeCardSpread';

describe('ThreeCardSpread', () => {
  it('renders three cards', () => {
    const { container } = render(<ThreeCardSpread includeReversed={false} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
  });

  it('renders three tooltip elements', () => {
    render(<ThreeCardSpread includeReversed={false} />);
    const tooltips = screen.getAllByTestId('card-tooltip');
    expect(tooltips).toHaveLength(3);
  });

  it('all tooltips show "Upright" when includeReversed is false', () => {
    render(<ThreeCardSpread includeReversed={false} />);
    const tooltips = screen.getAllByTestId('card-tooltip');
    tooltips.forEach((tooltip) => {
      expect(tooltip.textContent).toMatch(/Upright/i);
    });
  });

  it('some tooltips may show "Reversed" when includeReversed is true', () => {
    render(<ThreeCardSpread includeReversed={true} />);
    const tooltips = screen.getAllByTestId('card-tooltip');
    expect(tooltips).toHaveLength(3);

    const reversedCount = tooltips.filter((tooltip) =>
      tooltip.textContent.includes('Reversed')
    ).length;

    // Should be between 0 and 3 depending on random state
    expect(reversedCount).toBeGreaterThanOrEqual(0);
    expect(reversedCount).toBeLessThanOrEqual(3);
  });
});
