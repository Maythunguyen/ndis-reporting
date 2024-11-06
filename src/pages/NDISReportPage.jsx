import EnterClientInfo from "../components/EnterClientInfo";
import FileUploadButton from "../components/FileUploadButton";
import SelectMeasureOutcomes from "../components/SelectMeasureOutcomes";
import ClinicalNotesSection from "../components/ClinicalNotesSection";
import AdditionalNotesTemplate from "../components/AdditionalNotesTemplate";

const NDISReportPage = () => {
  const onFileChange = (files) => {
    console.log(files);
  }
  
  return (
    <div className="min-h-screen py-16 bg-white">
      <form className="max-w-7xl mx-auto">
        {/* Generate Button with Line */}
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

        {/* Client Information Section */}
        <EnterClientInfo />
        
        {/* Clinical Notes Section */}
        <ClinicalNotesSection />
        
        {/* Measure Outcomes and File Upload Section */}
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="w-[45%]">
              <SelectMeasureOutcomes />
            </div>
            <div className="w-[50%]">
              <div className="mt-16"> {/* Increased top margin */}
                <button 
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-[140px] inline-flex items-center gap-2 justify-center"
                  onClick={() => document.getElementById('file-upload').click()}
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Upload files
                </button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => onFileChange(e.target.files)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes and Template Section */}
        <div className="mt-16">
          <AdditionalNotesTemplate />
        </div>

        {/* Bottom spacing container */}
        <div className="h-16"></div>
      </form>
    </div>
  );
}

export default NDISReportPage;