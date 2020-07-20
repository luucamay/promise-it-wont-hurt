function attachTitle (firstArgument) {
    return 'DR. ' + firstArgument;
}

const promise = new Promise(function(fulfill, reject){
    fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);