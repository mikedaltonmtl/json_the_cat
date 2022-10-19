const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => { // make the request

    // return any errors to the callback function
    if (error) {

      const errorMessage = `A ${error.code} error occurred while trying to connect to the following api (${error.hostname}):\nThe details are as follows:\n${error}`;

      callback(errorMessage, null);
      return;
    }

    // body is a string, we can deserialize it into an object using JSON.parse()
    const data = JSON.parse(body);

    // check that some data has been returned (an empty array is returned if the breed is not found)
    if (data.length === 0) {
      
      // return error message to callback funtion then exit
      const errorMessage = `The breed you chose (${breedName}) does not exist in the database, sorry.`;
      callback(errorMessage, null);
      return;
    }

    // we have data, return the description to the callback function
    const desc = data[0]['description'];
    callback(null, desc);

  });

};

module.exports = { fetchBreedDescription };