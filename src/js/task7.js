//Function that takes an object with a nesting and transforms it into a single
// flat map with different levels separated by slashes ( `'/'`)
function mapObject(obj) {
    const result = new Map();

    function convertToPath(current, path) {
        for (const key in current) {
            const value = current[key];
            const newPath = path ? `${path}/${key}` : key; //write the key value to a buffer variable

            if (typeof value === 'object' && !Array.isArray(value)) { //check if value is object or array
                convertToPath(value, newPath);
            } else {
                result.set(newPath, value); //add it to the Map if the value is not an object
            }
        }
    }

    convertToPath(obj, '');

    //convert Map to Object
    const resultMap = {};
    result.forEach((value, key) => {
        resultMap[key] = value;
    });

    return resultMap;
}
const obj = {
    a: {
        b: {
            c: 12,
            d: 'Hello World'
        },
        e: [1,2,3]
    }
};

console.log(mapObject(obj));
// Outputs: { 'a/b/c': 12, 'a/b/d': 'Hello World', 'a/e': [ 1, 2, 3 ] }