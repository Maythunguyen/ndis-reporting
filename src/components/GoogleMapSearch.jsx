import TextField from '@mui/material/TextField';
import useGooglePlacesAutocomplete from '../hooks/useGooglePlacesAutocomplete';

const GoogleMapSearch = () => {
  const [autocompleteRef, dispatch, state] = useGooglePlacesAutocomplete();

  const handleChange = (field) => (e) => {
    dispatch({ type: field, payload: e.target.value });
  };

  return (
    <section>
      <div className="w-full items-center m-auto">
        {/* Address and City */}
        <div className="w-full flex flex-row justify-between mb-5">
          <div className="w-[45%]">
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              placeholder="Enter address"
              fullWidth
              required
              inputRef={autocompleteRef}
              value={state.address}
              onChange={handleChange('SET_ADDRESS')}
            />
          </div>
          <div className="w-[50%]">
            <TextField
              id="city"
              label="City"
              variant="outlined"
              placeholder="Enter city"
              fullWidth
              required
              value={state.city}
              onChange={handleChange('SET_CITY')}
            />
          </div>
        </div>

        {/* State, Country, Postcode */}
        <div className="w-full flex flex-row justify-between mb-5">
          <div className="w-[45%]">
            <TextField
              id="state"
              label="State"
              variant="outlined"
              placeholder="Enter state"
              fullWidth
              required
              value={state.state}
              onChange={handleChange('SET_STATE')}
            />
          </div>
          <div className="w-[50%] flex flex-row gap-5">
            <div>
              <TextField
                id="country"
                label="Country"
                variant="outlined"
                placeholder="Enter country"
                fullWidth
                required
                value={state.country}
                onChange={handleChange('SET_COUNTRY')}
              />
            </div>
            <div>
              <TextField
                id="postcode"
                label="Post Code"
                variant="outlined"
                placeholder="Enter postcode"
                fullWidth
                required
                value={state.postcode}
                onChange={handleChange('SET_POSTCODE')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSearch;
