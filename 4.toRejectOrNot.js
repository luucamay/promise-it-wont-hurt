var promise = new Promise(function (fulfill, reject) {
  // Your solution 
  fulfill('I FIRED');
  reject(new Error("I DID NOT FIRE"));
});

function onReject(error) {
    console.log(error.message);
}
// promise.then((successMessage) => console.log(successMessage));
promise.then(console.log, onReject);
