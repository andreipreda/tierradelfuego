export const name = 'forecast';

export const apiConfig = {
  id: 3833367,
  name: 'Ushuaia',
  units: 'metric',
  APPID: 'b0fe630c819a6f05f7e19097e89aca5e'
};

export const forecast5Endpoint = 'http://api.openweathermap.org/data/2.5/forecast/city';
export const API_RESPONSE_TIMEOUT = 1000;

export const dateFormat = 'dddd - kk:mm';

export const badgeTypes = {
  Clear: 'success',
  Snow: 'secondary',
  Rain: 'error',
  Clouds: 'info'
};
