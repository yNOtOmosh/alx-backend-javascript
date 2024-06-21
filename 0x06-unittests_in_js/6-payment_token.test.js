const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should do nothing when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        // This block should not be executed because the promise should not resolve
        done(new Error('Promise should not resolve'));
      })
      .catch(() => {
        // This block will be executed, but we expect no promise to be resolved
        done();
      });
  });
});