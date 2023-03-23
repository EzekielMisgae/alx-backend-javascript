const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('checking if numbers round', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('checking if numbers round 2nd round', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('checking if numbers round 3rd round', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('checking if numbers round 4th round', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('checking if numbers round 5th round', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('checking negative return', () => {
      assert.equal(calculateNumber('SUM', -1.3, -3.7), -5);
    });
  });
  describe('SUBTRACT', () => {
    it('checking if numbers round', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('checking if numbers round 2nd round', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('checking if numbers round 3rd round', () => {
      assert.equal(calculateNumber('SUBTRACT', 6.2, 3.7), 2);
    });
    it('checking if numbers round 4th round', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.5, 3.7), 2);
    });
    it('checking if numbers round 5th round', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('checking negative return', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.3, -3.7), 3);
    });
  });
  describe('DIVIDE', () => {
    it('checking if numbers round', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
    });
    it('checking if numbers round 2nd round', () => {
      assert.equal(calculateNumber('DIVIDE', 4, 3.7), 1);
    });
    it('checking if numbers round 3rd round', () => {
      assert.equal(calculateNumber('DIVIDE', 2.2, 0.7), 2);
    });
    it('checking if numbers round 4th round', () => {
      assert.equal(calculateNumber('DIVIDE', 15, 2.7), 5);
    });
    it('checking if numbers round 5th round', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('checking negative return', () => {
      assert.equal(calculateNumber('DIVIDE', -1.3, 0), 'Error');
    });
  });
});