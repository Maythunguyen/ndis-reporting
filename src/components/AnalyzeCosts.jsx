import React from 'react';

const AnalyzeCosts = () => {
    const handleAnalyze = async () => {
        try {
            const response = await fetch('/api/analyze-costs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Add your request data here
                }),
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Failed to analyze costs');
            }
            
            console.log('Analysis complete:', data);
            
        } catch (error) {
            console.error('Error analyzing costs:', error);
        }
    };

    return (
        <div className="flex flex-col items-start">
            <button 
                onClick={handleAnalyze}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 inline-flex whitespace-nowrap"
                type="button"
            >
                Analyze Costs
            </button>
            <span className="text-sm text-gray-500 mt-1">
                *Click this button to analyze the costs
            </span>
        </div>
    );
};

export default AnalyzeCosts;