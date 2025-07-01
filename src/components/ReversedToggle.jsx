export default function ReversedToggle({ checked, onChange, className }) {
  return (
    <label className={`include-reversed-toggle ${className || ''}`}>
      <span>Include reversed</span>
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
