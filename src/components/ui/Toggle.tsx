import React from 'react';
import './Toggle.css';

interface ToggleProps {
  options: { label: string | React.ReactNode; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ options, value, onChange }) => {
  return (
    <div className="toggle-container glass-panel">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`toggle-btn ${value === opt.value ? 'active' : ''}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};
