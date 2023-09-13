//wrapper function that accepts an array of functions and parameters
// and returns an array of executed functions
function bulkRun(functionsAndArgs) {
    //create an array of promises
    const promises = functionsAndArgs.map(([func, args]) => {
        return new Promise((resolve) => {
            func(...args, (result) => {
                resolve(result);
            });
        });
    });
    //use Promise.all and wait for completing all promises
    return Promise.all(promises);
}

const f1 = (cb) => { cb(1); };
const f2 = (a, cb) => { cb(a); };
const f3 = (a, b, cb) => { setTimeout(() => cb([a, b]), 1000); };

bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]],
]).then((results) => {
    console.log(results);
});
//Output: [ 1, 2, [ 3, 4 ] ]
