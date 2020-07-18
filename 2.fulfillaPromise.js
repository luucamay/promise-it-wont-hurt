'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution 
  setTimeout(() => fulfill('FULFILLED!'), 300);
});

// promise.then((successMessage) => console.log(successMessage));
promise.then(console.log);
