const isSimilar = (a, b) => parseInt(a) === parseInt(b);

// This might lead to unexpected results... not checking if "c" is undefined
const checkBounds = (a, b, c) => parseInt(a) !== parseInt(b) && parseInt(a) !== parseInt(c);

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
  : isSimilar(input[idx], input[idx - 1]) && checkBounds(input[idx], input[idx - 2], input[idx + 1])
  ? true
  : hasMatchingPair(input, idx + 1)
);

module.exports = hasMatchingPair;
