import { useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import RandomCard from './views/RandomCard';
import CardDetail from './views/CardDetail';
import FullDeck from './views/FullDeck';
import ThreeCardSpread from './views/ThreeCardSpread';
import CelticCrossSpread from './views/CelticCrossSpread';

function App() {
  const [view, setView] = useState('Random Card');
  const [selectedCard, setSelectedCard] = useState(null);
  const [includeReversed, setIncludeReversed] = useState(true);
  const [randomCardRefresh, setRandomCardRefresh] = useState(0);

  const handleSelect = (item) => {
    if (typeof item === 'string') {
      if (item === 'Random Card') {
        setRandomCardRefresh((prev) => prev + 1);
      }
      setView(item);
      setSelectedCard(null);
    } else {
      setView('CardDetail');
      setSelectedCard(item);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 relative">
      <HamburgerMenu onSelect={handleSelect} />

      {/* Toggle for reversed cards */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-2 text-sm bg-gray-800 px-3 py-2 rounded shadow">
        <label htmlFor="toggle-reversed" className="cursor-pointer select-none">
          Include Reversed
        </label>
        <input
          id="toggle-reversed"
          type="checkbox"
          checked={includeReversed}
          onChange={() => setIncludeReversed((prev) => !prev)}
        />
      </div>

      {/* Render active view */}
      {view === 'Random Card' && (
        <RandomCard
          includeReversed={includeReversed}
          refreshKey={randomCardRefresh}
        />
      )}
      {view === 'CardDetail' && selectedCard && (
        <CardDetail card={selectedCard} />
      )}
      {view === 'Choose from Deck' && <FullDeck />}
      {view === 'Three Card Spread' && <ThreeCardSpread />}
      {view === 'Celtic Cross Spread' && <CelticCrossSpread />}
    </div>
  );
}

export default App;
