const R = require('ramda');

const _getFuelReqs = R.pipe(
  R.divide(R.__, 3),
  Math.floor,
  R.subtract(R.__, 2),
);

function getFuelReqs(initMass) {
  const newMass = _getFuelReqs(initMass);

  return newMass < 0 ? 0 : newMass + getFuelReqs(newMass);
}

module.exports = getFuelReqs;
