
import TextField from '@mui/material/TextField';
import GoogleMapSearch from './GoogleMapSearch';

const EnterClientInfo = () => {
  return (
    <section>
      <div className="h5 font-semibold w-[90%] items-center m-auto mb-5">
        <h3>Enter Client Information</h3>
      </div>
      
      <div className="w-[90%] items-center m-auto">
        {/* Name and DOB */}
        <div className="w-full flex flex-row justify-between mb-5">
          <div className="w-[50%] flex flex-row gap-5">
            <div>
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined" // Use outlined variant
                placeholder="Enter text"
                fullWidth // Makes the input take full width
                required
                className="placeholder:border-stroke-1" // Tailwind for placeholder color (may need adjustment)
              />
            </div>
            <div>
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter text"
                fullWidth
                required
                className="placeholder:border-stroke-1"
              />
            </div>
          </div>
          <div className="w-[50%]">
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                shrink: true, // Keeps the label shrunk for date input
              }}
              className="placeholder:border-stroke-1"
            />
          </div>
        </div>

        {/* NDIS and Registration number */}
        <div className="w-full flex flex-row justify-between mb-5">
          <div className="w-[45%]">
            <TextField
              id="ndis-number"
              label="NDIS Number"
              variant="outlined"
              placeholder="Enter text"
              fullWidth
              required
              className="placeholder:border-stroke-1"
            />
          </div>
          <div className="w-[50%]">
            <TextField
              id="registration-number"
              label="Registration Number"
              variant="outlined"
              placeholder="Enter text"
              fullWidth
              required
              className="placeholder:border-stroke-1"
            />
          </div>
        </div>

        {/* Address and City */}
       
            <GoogleMapSearch />

        {/* Start Date and Contact Number*/}
        <div className="w-full flex flex-row justify-between mb-5">
          <div className="w-[45%]">
            <TextField
              id="start-date"
              label="Start Date"
              type="date"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
              className="placeholder:border-stroke-1"
            />
          </div>
          <div className="w-[50%]">
            <TextField
              id="contact-number"
              label="Contact Number"
              variant="outlined"
              placeholder="Enter text"
              fullWidth
              required
              className="placeholder:border-stroke-1"
            />
          </div>
        </div>

        {/* Emergency contact */}
        <div className="w-full flex flex-row justify-between mb-5">
          <div className="w-[45%]">
            <TextField
              id="emergency-contact-name"
              label="Emergency Contact Full Name"
              variant="outlined"
              placeholder="Enter text"
              fullWidth
              required
              className="placeholder:border-stroke-1"
            />
          </div>
          <div className="w-[50%]">
            <TextField
              id="emergency-contact-number"
              label="Emergency Contact Number"
              variant="outlined"
              placeholder="Enter text"
              fullWidth
              required
              className="placeholder:border-stroke-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterClientInfo;
