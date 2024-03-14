const request = require('request');

const searchFor = process.argv.slice(2);
const baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
const baseUrlbroken = 'https://api.thecatapi.com/v1/breeds/search?q=';

const searchForCat = (searchTerm) => {
  request(`${baseUrlbroken}${searchTerm}`, (err, res, body) => {
    try {
      if (err) throw new Error(err);
      console.log(body);

      const [data] = JSON.parse(body);

      if (!data) throw new Error('no results found!');
      console.log(data.description);
    } catch (err) {
      console.log(err.message);
    }
  });
};

searchForCat(searchFor);
