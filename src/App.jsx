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
    <div className="app-wrapper min-h-screen bg-cosmic font-sans text-gray-100 p-4 flex flex-col md:flex-row gap-4">
      {/* Mobile layout */}
      {isMobile ? (
        <div className="flex flex-col h-screen gap-2">
          {/* Menu on top */}
          <div className="flex-none w-full">
            <HamburgerMenu onSelect={handleSelect} cards={cards} />
          </div>

          {/* Canvas fills remaining vertical space */}
          <div className="flex-grow w-full flex items-center justify-center">
            <div className="canvas w-full h-full">
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

          {/* Toggle at bottom */}
          <div className="flex-none w-full">
            <ReversedToggle
              includeReversed={includeReversed}
              setIncludeReversed={setIncludeReversed}
            />
          </div>
        </div>
      ) : (
        <>
          {/* Desktop canvas */}
          <div className="canvas-container flex-1 min-h-full">
            <div className="canvas w-full">
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

          {/* Desktop menu + toggle */}
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
        </>
      )}
    </div>
  );
}

export default App;
