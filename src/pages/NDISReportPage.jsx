import EnterClientInfo from "../components/EnterClientInfo";
import FileUploadButton from "../components/FileUploadButton";
import SelectMeasureOutcomes from "../components/SelectMeasureOutcomes";
import ClinicalNotesSection from "../components/ClinicalNotesSection";
import GenerateButton from "../components/GenerateButton";
import AnalyzeCosts from "../components/AnalyzeCosts";
import SelectTemplate from "../components/SelectTemplate";

const NDISReportPage = () => {
  const onFileChange = (files) => {
    console.log(files);
  }
  
  return (
    <div className="min-h-screen py-16 bg-white">
      <form className="max-w-7xl mx-auto">
        <GenerateButton />
        <EnterClientInfo />
        <ClinicalNotesSection />
        
        {/* Measure Outcomes and File Upload Section */}
        <div className="w-[90%] mx-auto mt-16">
          <div className="flex justify-between items-start">
            <div className="w-[45%]">
              <h3 className="h5 font-medium text-gray-700 mb-4">Select Measure Outcomes</h3>
              <SelectMeasureOutcomes />
            </div>
            <div className="w-[50%]">
              <FileUploadButton onFileChange={onFileChange} />
            </div>
          </div>
        </div>

        {/* Additional Notes and Analyze Costs Section */}
        <div className="w-[90%] mx-auto mt-16">
          <div className="flex justify-between gap-16">
            <div className="w-[45%]">
              <div className="h5 font-medium text-gray-700 mb-4">
                <h3>Additional Notes</h3>
              </div>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter additional notes here"
              />
            </div>
            <div className="w-[50%] mt-16">
              <AnalyzeCosts />
            </div>
          </div>
        </div>

        {/* Select Template Section */}
        <SelectTemplate />

        <div className="h-16"></div>
      </form>
    </div>
  );
}

export default NDISReportPage;