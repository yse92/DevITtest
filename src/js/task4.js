//method which converts array into object

function arrayToObject(arr) {
    const obj = {};
    for (const [key, value] of arr) { //arr[0]-key, arr[1]-value
        //call method recursively if the value is an array
        if (Array.isArray(value)) {
            obj[key] = arrayToObject(value);
        } else {
            obj[key] = value;
        }
    }
    return obj;
}
let arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
console.log(arrayToObject(arr))
// Outputs: {
// name: 'developer',
//     age: 5,
//     skills: {
//     html: 4,
//         css: 5,
//         js: 5
// }
