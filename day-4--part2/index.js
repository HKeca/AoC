const { pipe, range, filter } = require('ramda');
const hasMatchingPair = require('./hasMatchingPair');
const doesntDecrease = require('./doesntDecrease');

const applyRules = input =>
  hasMatchingPair(input.toString()) &&
  doesntDecrease(input.toString());

const possiblePasswords = pipe(
  range,
  filter(applyRules)
)(367479, 893698);

console.log(`Number of possible passwords: ${possiblePasswords.length}`);
