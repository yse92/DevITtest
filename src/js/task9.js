//Function add that would work like this add(1)(2)(7)...(n).
// The number of sequential function calls are unlimited.

//executes once and returns only f
function add(a) {
    //function must store the current counter in memory between calls
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f; //returns itself
}


// console.log(Number(add(1)(2))); // == 3
// console.log(Number(add(1)(2)(5))); // == 8
// console.log(Number(add(1)(2)(-3)(4))); //  == 4
// console.log(Number(add(1)(2)(3)(4)(-5))); // == 5