export default function ReversedToggle({ checked, onChange, className }) {
  return (
    <label
      className={`include-reversed-toggle cursor-pointer select-none ${className || ''}`}
    >
      <span>Include Reversed</span>
      <span className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-checked={checked}
          role="switch"
        />
        <span className="slider" />
      </span>
    </label>
  );
}
