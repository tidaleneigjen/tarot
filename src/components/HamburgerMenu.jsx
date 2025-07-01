import { useState, useMemo } from 'react';
import { VIEW } from '../constants/views';

export default function HamburgerMenu({ onSelect, cards }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleMenu = () => setMenuOpen((open) => !open);
  const toggleSection = (label) =>
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));

  const sections = useMemo(() => {
    const groupBySuit = (suit) => cards.filter((card) => card.suit === suit);
    const majorArcana = cards.filter((card) => card.type === 'major');

    return [
      { label: 'Major Arcana', cards: majorArcana },
      { label: 'Cups', cards: groupBySuit('cups') },
      { label: 'Wands', cards: groupBySuit('wands') },
      { label: 'Pentacles', cards: groupBySuit('pentacles') },
      { label: 'Swords', cards: groupBySuit('swords') },
    ];
  }, [cards]);

  return (
    <nav className="menu-container w-full md:w-64" aria-label="Main navigation">
      {/* Mobile Toggle Button */}
      {/* Mobile Toggle Button */}
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 text-white rounded shadow mb-2 focus:outline-none"
          aria-expanded={menuOpen}
          aria-controls="menu-content"
        >
          <span className="text-sm text-gray-400 tracking-wide">
            {menuOpen ? 'CLOSE' : 'MENU'}
          </span>
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-1/2 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 w-full h-0.5 bg-purple-400 transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 ${
                menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menu Content */}
      <div
        id="menu-content"
        className={`
    overflow-hidden text-gray-100
    transition-[max-height] duration-300 ease-in-out
    ${menuOpen ? 'p-2' : 'p-0'}
    ${menuOpen ? 'max-h-[1000px]' : 'max-h-0'}
    md:max-h-none md:p-4 md:block
  `}
      >
        {/* Views */}
        <section className="mb-6" aria-labelledby="views-heading">
          <h3
            id="views-heading"
            className="text-lg font-semibold border-b border-purple-700 pb-1 mb-2 text-purple-300"
          >
            Views
          </h3>
          <ul className="space-y-1">
            {[VIEW.Random, VIEW.Deck, VIEW.Three, VIEW.Celtic].map((label) => (
              <li key={label}>
                <button
                  className="menu-button"
                  onClick={() => onSelect(label)}
                  type="button"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Individual Cards */}
        <section aria-labelledby="cards-heading">
          <h3
            id="cards-heading"
            className="text-lg font-semibold border-b border-purple-700 pb-1 mb-2 text-purple-300"
          >
            Individual Cards
          </h3>

          {sections.map(({ label, cards }) => {
            const isExpanded = expandedSections[label];
            return (
              <div key={label} className="mb-4">
                <button
                  onClick={() => toggleSection(label)}
                  aria-expanded={isExpanded}
                  aria-controls={`${label}-list`}
                  className="menu-button"
                  type="button"
                >
                  {label} {isExpanded ? '▲' : '▼'}
                </button>

                {/* Animated Section */}
                <div
                  id={`${label}-list`}
                  className={`
                    transition-[max-height] duration-300 overflow-hidden
                    ${isExpanded ? 'max-h-64 mt-2' : 'max-h-0'}
                  `}
                >
                  <ul className="ml-4 space-y-1 pr-1 overflow-y-auto max-h-64">
                    {cards.map((card) => (
                      <li key={card.name_short}>
                        <button
                          className="menu-item"
                          onClick={() => onSelect(card)}
                          type="button"
                        >
                          {card.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </nav>
  );
}
