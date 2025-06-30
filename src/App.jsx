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
    <div className="min-h-screen text-gray-100 p-4 relative bg-gradient-to-br from-[#1a1a2e] via-[#2d1b3c] to-[#1e1b2f]">
      <HamburgerMenu onSelect={handleSelect} />

      {/* Toggle for reversed cards */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-3 text-sm bg-gray-800 bg-opacity-80 px-4 py-2 rounded-full shadow">
        <label htmlFor="toggle-reversed" className="text-gray-300">
          Reversed
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle-reversed"
            checked={includeReversed}
            onChange={() => setIncludeReversed((prev) => !prev)}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-purple-600 transition-colors duration-300"></div>
          <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
        </label>
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
