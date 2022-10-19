const request = require('request');
const fs = require('fs');

const breed = process.argv[2];

if (!breed) {
  console.log('You forgot to choose a breed!');
  return;
}

const url = `https://api.thecattapi.com/v1/breeds/search?q=${breed}`; 

request(url, (error, response, body) => {

  // print any errors
  if (error) {
    console.log(`A ${error.code} error occurred while trying to connect to the following api (${error.hostname}):\n`);
    console.log(`The details are as follows:\n`, error);
    return;
  }

  // body is a string, we can deserialize it into an object using JSON.parse()
  const data = JSON.parse(body);

  // check that some data has been returned
  // (an empty array is returned if the breed is not found)
  if (data.length === 0) {
    console.log('The breed you chose does not exist in the database, sorry.');
    return;
  }

  // we have data, print the description
  const desc = data[0]['description'];
  console.log(desc);

});