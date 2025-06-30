import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { VIEW } from '../constants/views';

export default function HamburgerMenu({ onSelect, cards }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(!isMobile); // open on desktop by default
  const [expandedSections, setExpandedSections] = useState({});

  const toggleMenu = () => setMenuOpen((open) => !open);
  const toggleSection = (label) =>
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));

  const groupBySuit = (suit) => cards.filter((card) => card.suit === suit);
  const majorArcana = cards.filter((card) => card.type === 'major');

  const sections = [
    { label: 'Major Arcana', cards: majorArcana },
    { label: 'Cups', cards: groupBySuit('cups') },
    { label: 'Wands', cards: groupBySuit('wands') },
    { label: 'Pentacles', cards: groupBySuit('pentacles') },
    { label: 'Swords', cards: groupBySuit('swords') },
  ];

  return (
    <nav className="menu-container w-full md:w-64" aria-label="Main navigation">
      {/* Mobile Toggle Button */}
      {isMobile && (
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
      )}

      {/* Menu Content */}
      <div
        id="menu-content"
        className={`
          transition-[max-height] duration-300 overflow-hidden text-gray-100 p-2 md:p-4
          ${menuOpen || !isMobile ? 'max-h-[1000px]' : 'max-h-0'}
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
