import { useState } from 'react';

const ClinicalNotesSection = () => {
  // State for form fields
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [selectedNote, setSelectedNote] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  // Predefined clinical notes options
  const clinicalNotesOptions = [
    'Initial Assessment',
    'Progress Review',
    'Therapy Session Notes',
    'Treatment Plan Update',
    'Discharge Summary'
  ];

  return (
    <section>
      {/* Updated heading style to match EnterClientInfo */}
      <div className="h5 font-semibold w-[90%] items-center m-auto mb-5">
        <h3>Clinical Notes</h3>
      </div>

      <div className="w-[90%] items-center m-auto">
        <div className="flex flex-row justify-between gap-16">
          {/* Left side - Clinical Notes */}
          <div className="w-[45%]">
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
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Diagnosis and Medical History */}
          <div className="w-[50%]">
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