const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log(`breedDetailsFromFile: Calling readFile...`);
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!');
    if (!error) {
      callback(data);
    } else {
      callback(undefined);
    }
  });
};

// INITIAL GIVEN TESTING THAT WAS PORTED OVER TO TEST FILE
// breedDetailsFromFile('Bombay', (bombay) => {
//   console.log('Return Value: ', bombay) // => print out details correctly.
// });

module.exports = breedDetailsFromFile;