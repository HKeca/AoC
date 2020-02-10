const { expect } = require('chai');
const findSimilar = require('../day-4/index');

describe('Day 4', () => {
  describe('Two adjacent digits are the same', () => {
    it('Should return true when there is one pair', () => {
      const result = findSimilar("111111");
      expect(result).to.equal(true);
    });

    it('Should return false when there is no pairs', () => {
      const result = findSimilar('121212');
      expect(result).to.equal(false);
    })
  });
});
