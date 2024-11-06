import { GOOGLE_MAPS_API_KEY } from './config';

export const loadGoogleMapsScript = (callback) => {
  if (!window.google) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
  } else {
    callback();
  }
};