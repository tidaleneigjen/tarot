import React, { useState } from "react";
import cards from "./data/cards.json";

import HamburgerMenu from "./components/HamburgerMenu";
import UpsideDownToggle from "./components/UpsideDownToggle";
import RandomCard from "./components/RandomCard";
import FullDeck from "./components/FullDeck";
import ThreeCardSpread from "./components/ThreeCardSpread";
import CelticCrossSpread from "./components/CelticCrossSpread";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState("random"); // default view
  const [includeUpsideDown, setIncludeUpsideDown] = useState(false);

  const handleMenuSelect = (selectedView) => {
    setView(selectedView);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans relative">
      {/* Hamburger menu top right */}
      <div className="fixed top-4 right-4 z-50">
        <HamburgerMenu
          isOpen={menuOpen}
          onToggle={() => setMenuOpen(!menuOpen)}
          onSelect={handleMenuSelect}
        />
      </div>

      {/* Main content area */}
      <main className="max-w-5xl mx-auto pt-16 px-6 pb-20 min-h-screen">
        {view === "random" && (
          <RandomCard cards={cards} includeUpsideDown={includeUpsideDown} />
        )}
        {view === "fullDeck" && (
          <FullDeck cards={cards} includeUpsideDown={includeUpsideDown} />
        )}
        {view === "threeCard" && (
          <ThreeCardSpread cards={cards} includeUpsideDown={includeUpsideDown} />
        )}
        {view === "celticCross" && (
          <CelticCrossSpread cards={cards} includeUpsideDown={includeUpsideDown} />
        )}
      </main>

      {/* Upside-down toggle near bottom center */}
      <footer className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
        <UpsideDownToggle
          enabled={includeUpsideDown}
          onToggle={() => setIncludeUpsideDown(!includeUpsideDown)}
        />
      </footer>
    </div>
  );
}
