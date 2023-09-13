//chunk array func yeilds slices of the array
function* chunkArray(arr, size) {
    for (let i = 0; i < arr.length; i += size) {
        //use yield to generate and return a slice of array
        //theslice is taken from the current index, creating a chunk.
        yield arr.slice(i, i + size);
}}
const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(iterator.next()) // { value: [1,2,3], done: false }
console.log(iterator.next()) // { value: [4,5,6], done: false }
console.log(iterator.next()) // { value: [7,8], done: false }
console.log(iterator.next()) // { value: undefined, done: true }
