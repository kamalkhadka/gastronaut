'use strict';

function detectLocation(result) {
  clearTimeout(keyupTimer);
  const {
    coords: { latitude: lat, longitude: lng },
  } = result;
  latitude = lat;
  longitude = lng;
  $('#location').val(``);
  $('#location').prop(
    'placeholder',
    `lat: ${lat.toFixed(2)}, lng: ${longitude.toFixed(2)}`
  );
  requestSearch();
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      alert('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      alert('An unknown error occurred.');
      break;
  }
}
