
import MeasureOutcomeDropdown from './MeasureOutcomeDropdown';

const SelectMeasureOutcomes = () => {
  return (
    <section className='w-[45%]'>
      <div className="h5 font-semibold w-full items-center m-auto mb-5 mt-15">
        <h3>Select Measure Outcomes</h3>
      </div>
      <div className="w-full items-center m-auto">
        <MeasureOutcomeDropdown />
      </div>
    </section>
  );
};

export default SelectMeasureOutcomes;
