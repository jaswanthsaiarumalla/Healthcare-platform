import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className = '', ...props }, ref) => {
    return (
      <div className={`input-wrapper ${fullWidth ? 'input-full' : ''} ${className}`}>
        {label && <label className="input-label">{label}</label>}
        <input 
          ref={ref}
          className={`input-field ${error ? 'input-error' : ''}`} 
          {...props} 
        />
        {error && <span className="input-error-msg">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
