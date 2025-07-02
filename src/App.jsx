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
    <div className="app-wrapper flex flex-col md:flex-row md:flex-nowrap min-h-screen p-4 gap-4">
      {/* Menu container */}
      <div className="menu-container w-full md:w-64 md:flex-shrink-0">
        <HamburgerMenu onSelect={handleSelect} cards={cards} />
      </div>

      {/* Canvas container */}
      <div className="canvas-container flex-1 min-h-[400px]">
        <div className="canvas bg-slate-900 bg-opacity-60 rounded-lg shadow-lg w-full h-full flex items-center justify-center p-4">
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
            <ThreeCardSpread cards={cards} includeReversed={includeReversed} />
          )}
          {view === VIEW.Celtic && <CelticCrossSpread />}
        </div>
      </div>
    </div>
  );
}

export default App;
