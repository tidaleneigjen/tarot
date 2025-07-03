import { useState, useEffect } from 'react';
import cards from './data/cards.json';
import HamburgerMenu from './components/HamburgerMenu';
import ReversedToggle from './components/ReversedToggle';
import RandomCard from './views/RandomCard';
import CardDetail from './views/CardDetail';
import FullDeck from './views/FullDeck';
import ThreeCardSpread from './views/ThreeCardSpread';
import CelticCrossSpread from './views/CelticCrossSpread';
import { VIEW } from './constants/views';
import './App.css';

function App() {
  const [view, setView] = useState(VIEW.Random);
  const [selectedCard, setSelectedCard] = useState(null);
  const [includeReversed, setIncludeReversed] = useState(true);
  const [randomCardRefresh, setRandomCardRefresh] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (item) => {
    if (typeof item === 'string') {
      if (item === VIEW.Random) {
        setRandomCardRefresh((prev) => prev + 1);
      }
      setView(item);
      setSelectedCard(null);
    } else {
      setView(VIEW.Detail);
      setSelectedCard(item);
    }
  };

  return (
    <div className="app-wrapper bg-cosmic font-sans text-gray-100 p-4 min-h-screen">
      {isMobile ? (
        <div className="flex flex-col min-h-screen gap-2">
          {/* Mobile Menu */}
          <div className="flex-none">
            <HamburgerMenu onSelect={handleSelect} cards={cards} />
          </div>

          {/* Mobile Canvas */}
          <div className="flex-grow">
            <div className="canvas">
              {view === VIEW.Random && (
                <RandomCard
                  includeReversed={includeReversed}
                  refreshKey={randomCardRefresh}
                  cards={cards}
                />
              )}
              {view === VIEW.Detail && selectedCard && (
                <CardDetail card={selectedCard} />
              )}
              {view === VIEW.Deck && <FullDeck />}
              {view === VIEW.Three && (
                <ThreeCardSpread
                  cards={cards}
                  includeReversed={includeReversed}
                />
              )}
              {view === VIEW.Celtic && (
                <CelticCrossSpread includeReversed={includeReversed} />
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex-none">
            <ReversedToggle
              includeReversed={includeReversed}
              setIncludeReversed={setIncludeReversed}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-4 min-h-screen">
          {/* Desktop Canvas */}
          <div className="canvas-container flex-1">
            <div className="canvas">
              {view === VIEW.Random && (
                <RandomCard
                  includeReversed={includeReversed}
                  refreshKey={randomCardRefresh}
                  cards={cards}
                />
              )}
              {view === VIEW.Detail && selectedCard && (
                <CardDetail card={selectedCard} />
              )}
              {view === VIEW.Deck && <FullDeck />}
              {view === VIEW.Three && (
                <ThreeCardSpread
                  cards={cards}
                  includeReversed={includeReversed}
                />
              )}
              {view === VIEW.Celtic && (
                <CelticCrossSpread includeReversed={includeReversed} />
              )}
            </div>
          </div>

          {/* Desktop Menu + Toggle */}
          <div className="menu-container w-64 flex flex-col justify-between flex-shrink-0">
            <div>
              <HamburgerMenu onSelect={handleSelect} cards={cards} />
            </div>
            <div>
              <ReversedToggle
                includeReversed={includeReversed}
                setIncludeReversed={setIncludeReversed}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
