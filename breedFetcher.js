const request = require('request');
const fs = require('fs');

const breed = process.argv[2];

if (!breed) {
  console.log('You forgot to choose a breed!');
  return;
}

const url = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian'; 

request(url, (error, response, body) => {

  // console.log(typeof body);
  // console.log('body', body);

  // body is a string, we can deserialize it into an object using JSON.parse()
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);

  // print description only
  const desc = data[0]['description'];
  console.log('desc', desc);

});