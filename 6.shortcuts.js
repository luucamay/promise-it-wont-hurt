const promise = Promise.reject(new Error('SORRY, SOMETHING WENT WRONG!'));

promise.catch(error => console.log(error.message));

const successPromise = Promise.resolve('SUCCESS VALUE');

successPromise.then(console.log);