import EnterClientInfo from "../components/EnterClientInfo";
import FileUploadButton from "../components/FileUploadButton";
import SelectMeasureOutcomes from "../components/SelectMeasureOutcomes";

const NDISReportPage = () => {
  const onFileChange = (files) => {
    console.log(files);
}
  return (
    <>
    <form>
          <EnterClientInfo />
          <div className="w-[90%] flex flex-row items-center mx-auto justify-start space-x-16">
            <SelectMeasureOutcomes />
            <FileUploadButton onFileChange={(files) => onFileChange(files)}/>
          </div>

    </form>

    </>
  );
}

export default NDISReportPage
