const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2]; // breed should be given as a command-line argument

if (!breed) { // verifiy that a breed was indeed specified
  console.log('You forgot to choose a breed!');
  return;
}

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});