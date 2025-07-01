import { useState } from 'react';
import cards from './data/cards.json';
import HamburgerMenu from './components/HamburgerMenu';
import RandomCard from './views/RandomCard';
import CardDetail from './views/CardDetail';
import FullDeck from './views/FullDeck';
import ThreeCardSpread from './views/ThreeCardSpread';
import CelticCrossSpread from './views/CelticCrossSpread';
import ReversedToggle from './components/ReversedToggle';
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
    <div className="app-wrapper">
      <div className="flex-container">
        <div className="content-wrapper canvas">
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

        <div className="menu-wrapper">
          <HamburgerMenu onSelect={handleSelect} cards={cards} />
        </div>
      </div>

      {/* Reversed Toggle - responsive placement */}
      <div
        className="
    mt-6 w-full flex justify-center
    md:mt-0 md:fixed md:bottom-4 md:right-4 md:w-64 md:justify-end
  "
      >
        <ReversedToggle
          checked={includeReversed}
          onChange={() => setIncludeReversed((prev) => !prev)}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default App;
