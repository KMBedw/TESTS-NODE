const user = require('../src/data/user');

const calculate_age = require('../src/helpers/calculate-age');

describe('unit test suite', () => {
  it('should throw error', () => {
    try {
        calculate_age("2022-01-02");
    } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toContain('Cannot read properties of undefined');
    }
  });
});
