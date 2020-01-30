const R = require('ramda');

module.exports = (mass) =>
  R.pipe(
    R.divide(R.__, 3),
    Math.floor,
    R.subtract(R.__, 2),
  )(mass);
