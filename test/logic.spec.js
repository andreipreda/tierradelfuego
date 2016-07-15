import 'babel-polyfill';
import test from 'ava';
import * as logic from './../app/forecast/logic';

test('mapIndex', t => {
  const funcIdx = (val, i) => i;
  const funcVal = val => val;
  const idx = logic.mapIndex(funcIdx, [10, 10, 10, 10, 10]);
  const vals = logic.mapIndex(funcVal, [10, 10, 10, 10, 10]);

  // output index
  t.deepEqual([0, 1, 2, 3, 4], idx);
  // output values
  t.deepEqual([10, 10, 10, 10, 10], vals);
});


test('momCal', t => {
  const unixTs = Date.now();
  const niceDate = logic.momCal(unixTs);
  t.is(typeof(niceDate), 'string');
});

test('filterRelevantData', t => {
  const inputObj = {
    dt: 123,
    main: { temp: -2 },
    weather: [{
      main: 'snow',
      description: 'light snow'
    }]
  };
  const filteredObj = logic.filterRelevantData(inputObj);
  t.deepEqual(filteredObj, {
    date: 123,
    temp: -2,
    weather: [{
      main: 'snow',
      description: 'light snow'
    }]
  });
});

test('processApiData', t => {
  const input = [
    {
      dt: 123,
      main: { temp: -2 },
      weather: [{
        main: 'snow',
        description: 'light snow'
      }]
    },
    {
      dt: 321,
      main: { temp: -1 },
      weather: [{
        main: 'rain',
        description: 'shower rain'
      }]
    }
  ];

  const outputData = logic.processApiData(input);
  t.deepEqual(outputData, [
    {
      date: 123,
      temp: -2,
      weather: [{
        main: 'snow',
        description: 'light snow'
      }]
    },
    {
      date: 321,
      temp: -1,
      weather: [{
        main: 'rain',
        description: 'shower rain'
      }]
    }
  ]);
});
