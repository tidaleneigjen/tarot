import React from 'react';

export default function UpsideDownToggle({ enabled, onToggle }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={enabled}
        onChange={onToggle}
        className="form-checkbox h-5 w-5 text-purple-500"
      />
      <span className="text-gray-300 text-sm">Include upside down cards</span>
    </label>
  );
}
