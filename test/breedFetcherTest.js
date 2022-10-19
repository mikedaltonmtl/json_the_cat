const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {

    fetchBreedDescription('Siberian', (err, desc) => {

      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error if a non-existant breed is passed in, via callback', (done) => {

    fetchBreedDescription('Siberianic', (err, desc) => {

      // we expect an error to be returned for this scenario
      const errorMessage = `The breed you chose (Siberianic) does not exist in the database, sorry.`;
      assert.equal(err, errorMessage);

      // description should be returned as null
      assert.equal(desc, null);

      done();
    });
  });

});