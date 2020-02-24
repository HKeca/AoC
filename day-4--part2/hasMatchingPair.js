const isEqual = (a, b) => parseInt(a) === parseInt(b);

/**
 * Check around pair to make sure its only a pair ("11")
 * and not multiple same digits ("111")
 *
 * >beforePair should not equal pairValue
 * >and afterPair should not equal pairValue
 *
 * @param {String} pairValue
 * @param {String} beforePair
 * @param {String} afterPair
 */
const isStrictlyPair = (pairValue, beforePair, afterPair) =>
  parseInt(pairValue) !== parseInt(beforePair) &&
  parseInt(pairValue) !== parseInt(afterPair);

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
