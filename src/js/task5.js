//method which converts object into array
function objectToArray(obj) {
    const arr = [];
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            //recursively call method to convert it to array and push the result to arr
            arr.push([key, objectToArray(obj[key])]);
        } else {
            //push [key, value] to the arr
            arr.push([key, obj[key]]);
        }
    }
    return arr;
}
console.log(JSON.stringify(objectToArray({
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
})))

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]