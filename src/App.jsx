import { useState, useEffect } from 'react';
import cards from './data/cards.json';
import HamburgerMenu from './components/HamburgerMenu';
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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
    <div className="app-wrapper">
      <div className="mobile-content-wrapper">
        {isMobile && (
          <div className="menu-container">
            <HamburgerMenu onSelect={handleSelect} cards={cards} />
          </div>
        )}

        <div className="canvas-container">
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
            {view === VIEW.Celtic && <CelticCrossSpread />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
