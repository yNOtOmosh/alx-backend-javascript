const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -0.4 and 0.4', function() {
      expect(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 1 when inputs are 0.5 and -0.5', function() {
      expect(calculateNumber('SUBTRACT', 0.5, -0.5), 1);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when divisor is 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return Error when rounded divisor is 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });
});
