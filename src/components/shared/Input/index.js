import { forwardRef } from 'react';
import "./style.scss";

const Input = forwardRef(({ errorMessage = null, children, className, ...props }, ref) => (
  <div className={`input ${className}`}>
    <label className={`matter-textfield-standard ${errorMessage && 'matter-error'}`}>
      <input
        {...props}
        ref={ref}
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
));

export {
  Input
}