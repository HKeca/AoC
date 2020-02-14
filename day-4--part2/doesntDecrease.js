const lessThanEqual = (a, b) => parseInt(a) >= parseInt(b);

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

module.exports = doesntDecrease;
