import { useState } from 'react';
import cards from '../data/cards.json';

const groupBySuit = (suit) => cards.filter((card) => card.suit === suit);
const majorArcana = cards.filter((card) => card.type === 'major');

const sections = [
  { label: 'Major Arcana', cards: majorArcana },
  { label: 'Cups', cards: groupBySuit('cups') },
  { label: 'Wands', cards: groupBySuit('wands') },
  { label: 'Pentacles', cards: groupBySuit('pentacles') },
  { label: 'Swords', cards: groupBySuit('swords') },
];

export default function HamburgerMenu({ onSelect }) {
  const [expanded, setExpanded] = useState({});
  const toggle = (label) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <div className="fixed top-4 right-4 z-50">
      <details className="group">
        <summary className="cursor-pointer px-4 py-2 bg-gray-800 text-white rounded shadow">
          ☰
        </summary>

        <div className="mt-2 w-64 bg-gray-900 bg-opacity-95 text-gray-100 border border-purple-800 rounded shadow-lg p-4 max-h-[90vh] overflow-y-auto">
          {/* Views Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold border-b border-purple-700 pb-1 mb-2">
              Views
            </h3>
            <ul className="space-y-1">
              {[
                'Random Card',
                'Choose from Deck',
                'Three Card Spread',
                'Celtic Cross',
              ].map((label) => (
                <li key={label}>
                  <button
                    className="text-left w-full text-purple-300 hover:underline hover:text-purple-400"
                    onClick={() => onSelect(label)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Individual Cards Section */}
          <div>
            <h3 className="text-lg font-semibold border-b border-purple-700 pb-1 mb-2">
              Individual Cards
            </h3>
            {sections.map(({ label, cards }) => (
              <div key={label} className="mb-2">
                <button
                  onClick={() => toggle(label)}
                  className="font-medium text-purple-300 hover:text-purple-400 w-full text-left"
                >
                  {label} {expanded[label] ? '▲' : '▼'}
                </button>
                {expanded[label] && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {cards.map((card) => (
                      <li key={card.name_short}>
                        <button
                          className="text-sm text-purple-400 hover:underline hover:text-purple-300"
                          onClick={() => onSelect(card)}
                        >
                          {card.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}
