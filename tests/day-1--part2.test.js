const { expect } = require('chai');
const getFuelRequired = require('../day-1--part2/getFuelRequired');

describe('Day one (part2) - recursive fuel reqs', () => {
  it('with a mass of 1969 output should be 966', () => {
    const fuelReq = getFuelRequired(1969);

    expect(fuelReq).to.equal(966);
  });

  it('with a mass of 100756 output should be 50346', () => {
    const fuelReq = getFuelRequired(100756);

    expect(fuelReq).to.equal(50346);
  });

  it('with a mass of 14 output should be 2', () => {
    const fuelReq = getFuelRequired(14);

    expect(fuelReq).to.equal(2);
  });
});
