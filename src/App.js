import React from 'react';
import Dropdown from './components/dropdown';

// Define an array of dropdown items
const dropdownItems = ["Yes", "Probabily Not", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8"];

function App() {
  return (
    // Set up the app container with background color and flex layout
    <div className="bg-cyan-500 w-screen h-screen flex justify-center">

      {/* Render the Dropdown component and pass the dropdownItems array */}
      <Dropdown items={dropdownItems} />

    </div>
  );
}

export default App;
