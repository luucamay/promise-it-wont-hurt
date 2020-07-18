'use strict';
require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
  // Your solution 
  setTimeout(() => fulfill('FULFILLED!'), 300);
});

// promise.then((successMessage) => console.log(successMessage));
promise.then(console.log);
