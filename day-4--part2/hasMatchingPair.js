const isSimilar = (a, b) => parseInt(a) === parseInt(b);

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

module.exports = hasMatchingPair;
