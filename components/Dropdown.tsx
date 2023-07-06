// Dropdown component

import React, { useState } from "react";

interface DropdownProps {
  label: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: (value: string) => void;
}

const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].value);

  const toggle = () => setOpen(!open);

  const handleHover = (value: string) => {
    setOpen(true);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 bg-white hover:bg-gray-50 border border-transparent focus:border-gray-300"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={toggle}
      >
        {label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            fill="currentColor"
          />
        </svg>
      </button>

      {open && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <div
                key={option.value}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setSelected(option.value);
                  onChange(option.value);
                }}
                onMouseEnter={() => handleHover(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
