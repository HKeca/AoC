const { pipe, range, and, filter } = require('ramda');

const isSimilar = (a, b) => parseInt(a) === parseInt(b);
const lessThanEqual = (a, b) => parseInt(a) >= parseInt(b);

/**
 * Find if string has at least one matching pair side by side
 *
 * >Check if two adjacent digits are the same
 *
 * @param {String} input string of numbers
 * @param {Integer} idx current index
 */
const findSimilar = (input, idx = 1) => (
  idx > input.length ?
   false :
    isSimilar(input[idx], input[idx - 1]) ? true : findSimilar(input, idx + 1)
);

/**
 * Loop over input and next if each number is greater
 * than or equal to the next
 *
 * @param {String} input string of numbers
 * @returns {Boolean}
 */
const neverLessThan = (input, idx = 1) => (
  idx > input.length - 1 ?
    true :
    lessThanEqual(input[idx], input[idx - 1]) ? neverLessThan(input, idx + 1) : false
);

let rangeIn = [
  367479,
  893698
];

const applyRules = input =>
  findSimilar(input.toString()) &&
  neverLessThan(input.toString());

const getPasswords = filter(applyRules);

const results = getPasswords(range(rangeIn[0], rangeIn[1]));

console.log(results.length);

module.exports = {
  findSimilar,
  neverLessThan
};
