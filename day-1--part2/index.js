const { map, reduce, pipe } = require('ramda');
const { _getFuelReqs, getFuelReqs } = require('./getFuelRequired');
const fs = require('fs');

// Read file and split by newline
const INPUT = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split("\n");

const sumOfFuelReqs = (accum, fuel) => accum + fuel;

const applyFuelReqs = pipe(
    _getFuelReqs,
    getFuelReqs
  );

const result = pipe(
  map(
    applyFuelReqs
  ),
  reduce(sumOfFuelReqs, 0),
)(INPUT);

console.log(result);
