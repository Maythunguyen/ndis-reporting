import React from 'react';

const GenerateButton = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-center mb-4">
        <button 
          type="button" 
          className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 w-[300px]"
        >
          Generate
        </button>
      </div>
      <div className="w-[90%] mx-auto border-t border-gray-200"></div>
    </div>
  );
};

export default GenerateButton;