import { useState } from 'react';

const AdditionalNotesTemplate = () => {
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('Initial Assessment Report');

  // Template options
  const templateOptions = [
    'Initial Assessment Report',
    'Review Report',
    'Progress Report',
    'Discharge Report'
  ];

  return (
    <section>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between gap-16 mb-12">
          {/* Left Column - Additional Notes */}
          <div className="w-[45%]">
            <div className="h5 font-medium text-gray-700 mb-4">
              <h3>Additional Notes</h3>
            </div>
            
            <div>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter additional notes here"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              />
            </div>
          </div>

          {/* Right Column - Analyze Costs */}
          <div className="w-[50%]">
            <div className="flex flex-col mt-16"> {/* Added top margin */}
              <button 
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-[140px] inline-flex justify-center"
              >
                Analyze Costs
              </button>
              <span className="text-sm text-gray-500 mt-1">*Click this button to analyze the costs</span>
            </div>
          </div>
        </div>

        {/* Select Template Section */}
        <div className="mt-12">
          <div className="h5 font-medium text-gray-700 mb-6">
            <h3>Select Template</h3>
          </div>
          
          <div className="flex flex-row justify-between gap-4">
            {templateOptions.map((template) => (
              <label 
                key={template}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="template"
                  value={template}
                  checked={selectedTemplate === template}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">
                  {template}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalNotesTemplate;