const { __, divide, subtract, pipe } = require('ramda');

/**
 * Apply fuel equation to input
 * >Take its mass, divide by three, round down, and subtract 2
 *
 * @param {Integer} mass
 * @returns {Integer}
 */
const applyMaths = pipe(
  divide(__, 3),
  Math.floor,
  subtract(__, 2),
);

/**
 * Get fuel requirements by recursively calling applyMaths
 *
 * @param {Integer} initMass Initial mass of module
 * @param {Integer} acc Running total of fuel required
 * @returns {Integer}
 */
const getFuelReqs = (initMass, acc = 0) =>
  initMass < 0 ? acc : getFuelReqs(
    applyMaths(initMass),
    initMass + acc
  );

module.exports = {
  applyMaths,
  getFuelReqs
};
