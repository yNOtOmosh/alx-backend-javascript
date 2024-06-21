const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with type SUM, totalAmount and totalShipping', function() {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy
    calculateNumberSpy.restore();
  });

  it('should log the correct total', function() {
    // Stub console.log to capture its output
    const consoleStub = sinon.stub(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.firstCall.args[0]).to.equal('The total is: 120');

    // Restore the stub
    consoleStub.restore();
  });
});
