let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('Something went wrong');
    }, 1000);
})

promise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
}).finally(function() {
    console.log('Execute irregardless');
});