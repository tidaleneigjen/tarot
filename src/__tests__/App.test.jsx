import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { VIEW } from '../constants/views';

describe('App component', () => {
  test('renders RandomCard view by default', () => {
    render(<App />);
    expect(screen.getByText(/Random Card/i)).toBeInTheDocument();
  });

  test('toggles includeReversed checkbox', async () => {
    render(<App />);
    const toggle = screen.getByRole('switch', { name: /include reversed/i });
    expect(toggle).toBeChecked();

    await userEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  test('changes view when clicking menu item', async () => {
    render(<App />);
    const deckButton = screen.getByRole('button', { name: VIEW.Deck });
    await userEvent.click(deckButton);

    expect(screen.getByText(/Choose from Deck/i)).toBeInTheDocument();
  });
});
