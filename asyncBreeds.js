// const fs = require('fs');

// const breedDetailsFromFile = function(breed, cb) {
//   console.log(`breedDetailsFromFile: Calling readFile...`);
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log('Callback: I have the data!')
//     if (!error) cb(data); //assuming no error, pass the data into the callback
//   });
// }


// asyncBreeds.js
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

// we try to get the return value
// breedDetailsFromFile('Bombay', (bombay) => {
//   console.log('Return Value: ', bombay) // => print out details correctly.
// });

module.exports = breedDetailsFromFile;
// // const bombay = breedDetailsFromFile('Bombay');
// // console.log('Return Value: ', bombay) // => will NOT print out details, instead we will see undefined!