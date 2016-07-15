import { addIndex, map, pick } from 'ramda';
import moment from 'moment';
import { dateFormat } from './constants';

export const mapIndex = addIndex(map);

export const momCal = (unixTS, format = dateFormat) =>
  moment.unix(unixTS).format(format);

export const filterRelevantData = item => {
  const { dt: date, main: { temp }, weather } = pick(['dt', 'main', 'weather'], item);
  return { date, temp, weather };
};

export const processApiData = items =>
  map(filterRelevantData, items);
