// calculate-age.test.js
const user = require('../src/data/user');
const calculate_age = require('../src/helpers/calculate-age');

describe('unit test suite', () => {
  it('should throw error', () => {
    try {
        calculate_age(user); // Passez l'objet `user` modifié au test
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain('Cannot read properties of undefined');
    }
  });
});
