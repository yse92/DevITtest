//deepEqual function
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true
    } //check if types and values are the same
    if (obj1 == null || obj2 == null ||
        typeof obj1 != "object" || typeof obj2 != "object") {
        return false
    } //check if they are objects and don't equal null
    let obj1keys = Object.keys(obj1)
    let obj2keys = Object.keys(obj2)
    if (obj1keys.length !== obj2keys.length) {
        return false
    } //first check length of their keys, then every key
    for (let key of obj1keys) {
        if (!obj2keys.includes(key) || !deepEqual(obj1 [key], obj2 [key])) {
            return false
        }
    }
    return true
}
console.log(deepEqual({name: 'test'}, {name: 'test'})) // output true
console.log(deepEqual({name: 'test'}, {name: 'test1'})) // output false
console.log(deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}})) // output false
console.log(deepEqual({name: 'test'}, {name: 'test', age: 10}))// false