const removeFromArray = function(array, ...args) {
    // run a for loop check if the current element is an array or not

    // if it is an array, loop through the array and check if the current element is in the array or not
        // if it is in the array, remove it from the array
        // if it isn't in the array, move to the next element
        // for (let i = 0; i < args.length; i++) {
        //     const index = array.indexOf(args[i]);
        //     if (index > -1) {
        //         array.splice(index, 1);
        //     }
        // }

    // return the modified array
    // return array;

  return array.filter(element =>!args.includes(element));


};

// Do not edit below this line
module.exports = removeFromArray;
