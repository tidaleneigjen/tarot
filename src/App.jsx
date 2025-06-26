import { useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import RandomCard from './views/RandomCard';
import CardDetail from './views/CardDetail';
import cards from './data/cards.json'; // ✅ Import card data

function App() {
  const [view, setView] = useState('Random Card');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (item) => {
    if (typeof item === 'string') {
      setView(item);
      setSelectedCard(null);
    } else {
      setView('CardDetail');
      setSelectedCard(item);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-gray-900 to-black text-gray-100 p-4 relative">
      <HamburgerMenu onSelect={handleSelect} />
      {view === 'Random Card' && <RandomCard cards={cards} />}
      {view === 'CardDetail' && selectedCard && (
        <CardDetail card={selectedCard} />
      )}
      {view === 'Choose from Deck' && (
        <div className="text-center mt-8">[Choose from Deck]</div>
      )}
      {view === 'Three Card Spread' && (
        <div className="text-center mt-8">[Three Card Spread]</div>
      )}
      {view === 'Celtic Cross' && (
        <div className="text-center mt-8">[Celtic Cross]</div>
      )}
    </div>
  );
}

export default App;
