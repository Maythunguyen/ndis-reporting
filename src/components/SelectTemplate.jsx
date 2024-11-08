import { useState } from 'react';

const SelectTemplate = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('Initial Assessment Report');
    
    const templates = [
        'Initial Assessment Report',
        'Review Report',
        'Progress Report',
        'Discharge Report'
    ];

    return (
        <div className="w-[90%] mx-auto mt-16">
            <div className="h5 font-medium text-gray-700 mb-6">
                <h3>Select Template</h3>
            </div>
            
            <div className="flex flex-row justify-between gap-8">
                {templates.map((template) => (
                    <div key={template} className="flex items-center">
                        <input
                            type="radio"
                            id={template.replace(/\s+/g, '-').toLowerCase()}
                            name="template"
                            value={template}
                            checked={selectedTemplate === template}
                            onChange={(e) => setSelectedTemplate(e.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                            htmlFor={template.replace(/\s+/g, '-').toLowerCase()}
                            className="ml-2 text-sm text-gray-700"
                        >
                            {template}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectTemplate;