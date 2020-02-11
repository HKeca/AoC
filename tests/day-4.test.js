const { expect } = require('chai');
const {
  findSimilar,
  neverLessThan
} = require('../day-4/index');

describe('Day 4', () => {
  describe('Two adjacent digits are the same', () => {
    it('Should return true when there is one pair', () => {
      const result = findSimilar('111111');
      expect(result).to.equal(true);
    });

    it('Should return false when there is no pairs', () => {
      const result = findSimilar('121212');
      expect(result).to.equal(false);
    });
  });

  describe('Next number is greater than or equal to previous number', () => {
    it('Should return true if next number is greater than or equal to prev', () => {
      const result = neverLessThan('123456');
      expect(result).to.equal(true);
    });

    it('Should return false if next number is less than previous', () => {
      const result = neverLessThan('123454');
      expect(result).to.equal(false);
    });
  });
});
