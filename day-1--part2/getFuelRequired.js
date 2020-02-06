const { __, divide, subtract, pipe } = require('ramda');

const _getFuelReqs = pipe(
  divide(__, 3),
  Math.floor,
  subtract(__, 2),
);

const getFuelReqs = (initMass, acc = 0) =>
  initMass < 0 ? acc : getFuelReqs(
    _getFuelReqs(initMass),
    initMass + acc
  );

module.exports = {
  _getFuelReqs,
  getFuelReqs
};
