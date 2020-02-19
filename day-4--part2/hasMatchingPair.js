const isEqual = (a, b) => parseInt(a) === parseInt(b);

/**
 * Check around pair to make sure its only a pair ("11")
 * and not multiple same digits ("111")
 *
 * >b should not equal a and c should not equal a
 *
 * @param {String} a
 * @param {String} b
 * @param {String} c
 */
const isStrictlyPair = (a, b, c) =>
  parseInt(a) !== parseInt(b) &&
  parseInt(a) !== parseInt(c);

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
  : isEqual(input[idx], input[idx - 1])
      && isStrictlyPair(input[idx], input[idx - 2], input[idx + 1])
  ? true
  : hasMatchingPair(input, idx + 1)
);

module.exports = hasMatchingPair;
