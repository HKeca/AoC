const { expect } = require('chai');
const getFuelRequired = require('../day-1/getFuelRequired');

describe('Day one - AoC', () => {
  it('with a mass of 12 output should be two', () => {
    const fuelReq = getFuelRequired(12);

    expect(fuelReq).to.equal(2);
  });

  it('with a mass of 1969 output should be 654', () => {
    const fuelReq = getFuelRequired(1969);

    expect(fuelReq).to.equal(654);
  });

  it('with a mass of 100756 output should be 33583', () => {
    const fuelReq = getFuelRequired(100756);

    expect(fuelReq).to.equal(33583);
  });
});
