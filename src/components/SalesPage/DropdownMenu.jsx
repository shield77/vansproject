import React, { useState } from 'react';
import "../../css/DropdownMenu.css";

function DropdownMenu({ buttonText, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const updatedSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedSelectedOptions);
    onChange(updatedSelectedOptions); // Вызываем обратный вызов с обновленными выбранными опциями
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {buttonText}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
              <p className='dropdown-menu-option'>{option}</p>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
