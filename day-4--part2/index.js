const { pipe, range, filter } = require('ramda');

const isSimilar = (a, b) => parseInt(a) === parseInt(b);
const lessThanEqual = (a, b) => parseInt(a) >= parseInt(b);

/**
 * Find if string has at least one matching pair side by side
 *
 * >Check if two adjacent digits are the same
 *
 * @param {String} input string of numbers
 * @param {Integer} idx current index
 * @returns {Boolean}
 */
const hasMatchingPair = (input, idx = 1) => (
  idx > input.length
  ? false
  : isSimilar(input[idx], input[idx - 1])
  ? true
  : hasMatchingPair(input, idx + 1)
);

/**
 * Loop over input and next if each number is greater
 * than or equal to the next
 *
 * @param {String} input string of numbers
 * @param {Integer} idx current index
 * @returns {Boolean}
 */
const doesntDecrease = (input, idx = 1) => (
  idx > input.length - 1
  ? true
  : lessThanEqual(input[idx], input[idx - 1])
  ? doesntDecrease(input, idx + 1)
  : false
);

const applyRules = input =>
  hasMatchingPair(input.toString()) &&
  doesntDecrease(input.toString());

const possiblePasswords = pipe(
  range,
  filter(applyRules)
)(367479, 893698);

console.log(`Number of possible passwords: ${possiblePasswords.length}`);

module.exports = {
  hasMatchingPair,
  doesntDecrease
};
