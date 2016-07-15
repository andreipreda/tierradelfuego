import { retrieveWeather } from './../forecast';

export function* sagasToRun() {
  yield retrieveWeather();
}
