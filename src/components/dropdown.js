import React, { useState } from 'react';
import arrowDown from "../assets/arrowDown.png";
import './scrollbar.css'; // Import custom scrollbar CSS

const Dropdown = ({ items }) => {

  // State for managing dropdown open state and selected item
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle dropdown item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  return (
    <div className=" mt-20">

      {/* Button to toggle dropdown */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={isOpen ? () => setIsOpen(false) : null}
        className="flex items-center justify-between w-48 px-4 py-2 border rounded bg-white hover:bg-gray-100 font-semibold text-lg"
      >
        {isOpen ? 'Select' : selectedItem || 'Select'}
        <img src={arrowDown} alt="dropdown-icon" className="w-3 h-3" />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="mt-[2px] bg-white rounded h-[200px] custom-scrollbar overflow-y-hidden hover:overflow-y-scroll "
        onMouseLeave={()=> setIsOpen(false)}>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Dropdown;