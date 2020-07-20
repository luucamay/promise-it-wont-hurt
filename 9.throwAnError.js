"use strict";

function parsePromised(json) {
  const promise = new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (error) {
      reject(error);
    }
  });

  return promise;
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2]).catch(onReject);
