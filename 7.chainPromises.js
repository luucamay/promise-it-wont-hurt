"use strict";
/* 
function onFulfilled(val) {
  return second(val);
}

var firstPromise = first();

var secondPromise = firstPromise.then((val) => onFulfilled(val));

secondPromise.then(console.log); */

// Second solution
/* 
var firstPromise = first();
var secondPromise = firstPromise.then(val => second(val));
secondPromise.then(console.log); */

// Third solution
first().then(second).then(console.log);
