"use strict";

function onFulfilled(val) {
  return second(val);
}

var firstPromise = first();

var secondPromise = firstPromise.then((val) => onFulfilled(val));

secondPromise.then(console.log);
