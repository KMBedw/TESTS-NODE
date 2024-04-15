const user = require('../src/data/user');

const calculate_age = require('../src/helpers/calculate-age');

describe('unit test suite', () => {
  it('should throw an error for invalid input', () => {
    const invalidInput = "2022-01-02";
    
    expect(() => {
      calculate_age({ birth: invalidInput });
    }).toThrow("Invalid input: 'birth' should be a Date instance.");
  });
});

