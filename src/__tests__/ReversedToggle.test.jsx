import { render, screen, fireEvent } from '@testing-library/react';
import ReversedToggle from '../components/ReversedToggle';

test('renders ReversedToggle and toggles correctly', () => {
  const onChange = vi.fn();
  render(<ReversedToggle checked={false} onChange={onChange} />);

  const checkbox = screen.getByRole('switch');
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(onChange).toHaveBeenCalledTimes(1);
});
