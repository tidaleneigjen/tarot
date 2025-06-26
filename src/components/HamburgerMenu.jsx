import React from "react";

export default function HamburgerMenu({ isOpen, onToggle, onSelect }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle menu"
      className="text-gray-300 focus:outline-none"
    >
      {/* Simple hamburger icon */}
      <div className="space-y-1">
        <span className="block w-6 h-0.5 bg-gray-300"></span>
        <span className="block w-6 h-0.5 bg-gray-300"></span>
        <span className="block w-6 h-0.5 bg-gray-300"></span>
      </div>
      {/* You can expand this later to show menu items */}
    </button>
  );
}

