const request = require('request');
const fs = require('fs');
const path = '/Users/shakiratkomolafe/lighthouse-js-fundamentals/w2/d3/page-fetcher/';
request('http://www.example.edu', (error, response, body) => {

  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
