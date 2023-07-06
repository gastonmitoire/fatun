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
    setSelected(value);
  };

  return open ? (
    <div className="relative inline-block text-left">
      <div className="absolute z-10 -top-2 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => {
                onChange(option.value);
                toggle();
              }}
              onMouseEnter={() => handleHover(option.value)}
            >
              <span>{option.label}</span>
              {selected === option.value && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="relative inline-block text-left">
      <div
        className="flex flex-row justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        onClick={toggle}
      >
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
