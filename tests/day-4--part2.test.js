const { expect } = require('chai');
const hasMatchingPair = require('../day-4--part2/hasMatchingPair');
const doesntDecrease = require('../day-4--part2/doesntDecrease');

describe('Day 4 - part 2', () => {
  describe('Two adjacent digits are the same', () => {
    it('Should return true when there is one pair', () => {
      const result = hasMatchingPair('112222');
      expect(result).to.equal(true);
    });

    it('Should return false when there is no pairs', () => {
      const result = hasMatchingPair('121212');
      expect(result).to.equal(false);
    });

    it('Should return false when groups of three+ are the only similar values', () => {
      const result = hasMatchingPair('111222');
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
