const { expect } = require('chai');
const {
  hasMatchingPair,
  doesntDecrease
} = require('../day-4/index');

describe('Day 4', () => {
  describe('Two adjacent digits are the same', () => {
    it('Should return true when there is one pair', () => {
      const result = hasMatchingPair('111111');
      expect(result).to.equal(true);
    });

    it('Should return false when there is no pairs', () => {
      const result = hasMatchingPair('121212');
      expect(result).to.equal(false);
    });
  });

  describe('Next number is greater than or equal to previous number', () => {
    it('Should return true if next number is greater than or equal to prev', () => {
      const result = doesntDecrease('123456');
      expect(result).to.equal(true);
    });

    it('Should return false if next number is less than previous', () => {
      const result = doesntDecrease('123454');
      expect(result).to.equal(false);
    });
  });
});
