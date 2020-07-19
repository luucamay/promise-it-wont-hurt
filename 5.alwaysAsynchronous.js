const promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

promise.then(console.log,undefined);

console.log('MAIN PROGRAM');