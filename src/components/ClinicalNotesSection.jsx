import { useState, useEffect } from 'react';

const ClinicalNotesSection = () => {
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [selectedNote, setSelectedNote] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [clinicalNotesOptions, setClinicalNotesOptions] = useState([]);

  useEffect(() => {
    // Fetch clinical notes options from API
    const fetchClinicalNotesOptions = async () => {
      try {
        const response = await fetch('/api/clinical-notes-options');
        const data = await response.json();
        setClinicalNotesOptions(data);
      } catch (error) {
        console.error('Error fetching clinical notes options:', error);
      }
    };

    fetchClinicalNotesOptions();
  }, []);

  return (
    <section>
      <div className="w-[90%] mx-auto">
        <div className="flex flex-row justify-between gap-16">
          {/* Left side - Clinical Notes */}
          <div className="w-[45%]">
            <div className="h5 font-medium text-gray-700 mb-4">
              <h3>Clinical Notes</h3>
            </div>
            
            {/* Clinical Notes Text Area */}
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-[100px] mb-4"
              placeholder="Enter your clinical notes or find it in drop down menu below"
              value={clinicalNotes}
              onChange={(e) => setClinicalNotes(e.target.value)}
            />

            {/* Clinical Notes Dropdown */}
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-md bg-white appearance-none"
                value={selectedNote}
                onChange={(e) => setSelectedNote(e.target.value)}
              >
                <option value="">Select Clinical Notes</option>
                {clinicalNotesOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right side - Diagnosis and Medical History */}
          <div className="w-[50%] pt-[28px]"> {/* Adjusted padding-top to align with textarea */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Diagnosis
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Medical History
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter text"
                  value={medicalHistory}
                  onChange={(e) => setMedicalHistory(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalNotesSection;