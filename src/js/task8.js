//Function that takes a positive integer num and
// returns an array of arrays of integers where the sum of each array is num. Arrays shouldn’t be repeated.

//I used here Set to avoid anagrams
    function combos(num) {
    const result = [];
    const uniqueCombos = new Set(); //use set to store unique combinations
    //generate combinations using the current number
    function generateCombos(currentNum, combo) {
        //add the combination to the result if the current sum is num
        if (currentNum === 0) {
            //convert the combination into a string for comparison
            const comboStr = combo.sort().toString();

            // check whether there is already such a combination in unique combinations
            if (!uniqueCombos.has(comboStr)) {
                uniqueCombos.add(comboStr);
                result.push(combo);
            }
            return;
        }

        //generate combos reducing current length
        for (let i = 1; i <= currentNum; i++) {
            generateCombos(currentNum - i, [...combo, i]);
        }
    }

    generateCombos(num, []);

    return result;
}
