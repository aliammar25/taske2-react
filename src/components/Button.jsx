import "./Button.css";

/**
 * Reusable Button
 * @param {string}   text      - label shown on the button
 * @param {function} onClick   - click handler
 * @param {string}   variant   - "primary" | "secondary" | "danger"
 * @param {boolean}  disabled  - optional, disables the button
 */
function Button({ text, onClick, variant = "primary", disabled = false }) {
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
