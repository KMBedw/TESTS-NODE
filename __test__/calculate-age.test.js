const calculate_age = require('../src/helpers/calculate-age');
const user = require('../src/data/user');

describe('unit test suite', () => {
  it('should throw an error when the birth property is not a Date instance', () => {
    // Créer une copie de l'objet user avec une propriété birth incorrecte
    const invalidUser = {
      ...user,
      birth: '1992-05-09' // Ici, birth est une chaîne et non une instance de Date
    };

    expect(() => {
      calculate_age(invalidUser);
    }).toThrow(new Error("Cannot read property 'getTime' of undefined"));
  });
});
