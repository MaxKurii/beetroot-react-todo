import "./style.scss";

function Input({ errorMessage = null, children, className, ...props }) {
  return (
    <div className={`input ${className}`}>
      <label className={`matter-textfield-standard ${errorMessage && 'matter-error'}`}>
        <input
          {...props}
          placeholder=" "
        />
        <span>
          {children}
        </span>
      </label>
      {errorMessage &&
        <span className="input__error-message matter-error-text">
          {errorMessage}
        </span>
      }
    </div>
  )
}

export {
  Input
}