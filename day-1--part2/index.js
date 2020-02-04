const R = require('ramda');
const getFuelRequired = require('./getFuelRequired');
const fs = require('fs');

// Read file and split by newline
const INPUT = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split("\n");

const sumOfFuelReqs = (accum, fuel) => accum + fuel;

const result = R.pipe(
  R.map(
    getFuelRequired
  ),
  R.reduce(sumOfFuelReqs, 0),
)(INPUT);

console.log(result);
