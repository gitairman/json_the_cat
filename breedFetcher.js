const request = require('request');

const baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
// const baseUrlbroken = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  request(`${baseUrl}${breedName}`, (err, res, body) => {
    if (err) return callback(err, null);
    const [data] = JSON.parse(body);

    if (!data) return callback('no results found!', null);

    return callback(null, data.description);
  });
};

module.exports = fetchBreedDescription;
