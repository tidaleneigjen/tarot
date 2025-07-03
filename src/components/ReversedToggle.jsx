export default function ReversedToggle({
  includeReversed,
  setIncludeReversed,
}) {
  return (
    <div className="w-full md:w-64 bg-slate-900 bg-opacity-60 rounded-lg shadow-lg p-4 flex flex-col items-center">
      <label
        htmlFor="reversed-toggle"
        className="relative inline-flex items-center cursor-pointer w-14 h-8"
      >
        <input
          type="checkbox"
          id="reversed-toggle"
          className="sr-only peer"
          checked={includeReversed}
          onChange={() => setIncludeReversed((prev) => !prev)}
        />
        <div className="w-full h-full bg-gray-600 rounded-full peer-focus:ring-2 peer-focus:ring-indigo-500 peer-checked:bg-indigo-600 relative transition-colors duration-300 ease-in-out">
          <span
            className="absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 ease-in-out"
            style={{
              transform: includeReversed ? 'translateX(24px)' : 'translateX(0)',
            }}
          />
        </div>
      </label>
      <span className="mt-2 text-sm text-gray-400 select-none">
        Include Reversed
      </span>
    </div>
  );
}
