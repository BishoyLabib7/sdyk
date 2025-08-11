import { useEffect, useRef, useState } from "react";

export default function Categories({ optionsData, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || optionsData?.[0].value
  );
  const [selectedLabel, setSelectedLabel] = useState(
    defaultValue
      ? optionsData.find((o) => o.value === defaultValue).label
      : optionsData[0].label
  );

  const dropdownRef = useRef(null);

  // Function to toggle the dropdown's visibility
  const handleToggle = () => setIsOpen(!isOpen);

  // Function to handle option selection
  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setSelectedLabel(option.label);
    setIsOpen(false); // Close the dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-[80%] relative font-sans text-right" ref={dropdownRef}>
      {isOpen && (
        <ul className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {optionsData.map((option) => (
            <li
              key={option.value}
              className={`cursor-pointer px-4 py-2 transition-colors duration-200 hover:bg-gray-100 ${
                selectedValue === option.value
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        className="flex flex-row-reverse w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-400 focus:border-green-500 focus:outline-none"
        onClick={handleToggle}
      >
        <span>{selectedLabel}</span>
        <svg
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
