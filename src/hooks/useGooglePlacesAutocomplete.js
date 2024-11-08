import { initialState, addressReducer } from '../reducers/AddressReducer';
import { useEffect, useRef, useReducer } from 'react';
import { loadGoogleMapsScript } from '../api/GoogleMapAPI/GoogleMapAPI';

const useGooglePlacesAutocomplete = () => {
  const autocompleteRef = useRef(null);
  const [state, dispatch] = useReducer(addressReducer, initialState);


  useEffect(() => {
    loadGoogleMapsScript(() => {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
        types: ['address'],
      });
      autocomplete.setFields(['address_components', 'formatted_address']);
      autocomplete.addListener('place_changed', () => handlePlaceSelect(autocomplete));
    });
  }, []);

  const handlePlaceSelect = (autocomplete) => {
    const place = autocomplete.getPlace();
    const addressComponents = place.address_components;

    dispatch({ type: 'SET_ADDRESS', payload: place.formatted_address });

    addressComponents.forEach((component) => {
      const types = component.types;
      if (types.includes('locality')) {
        dispatch({ type: 'SET_CITY', payload: component.long_name });
      }
      if (types.includes('administrative_area_level_1')) {
        dispatch({ type: 'SET_STATE', payload: component.long_name });
      }
      if (types.includes('country')) {
        dispatch({ type: 'SET_COUNTRY', payload: component.long_name });
      }
      if (types.includes('postal_code')) {
        dispatch({ type: 'SET_POSTCODE', payload: component.long_name });
      }
    });
  };

  return [autocompleteRef, dispatch, state];
};

export default useGooglePlacesAutocomplete;
