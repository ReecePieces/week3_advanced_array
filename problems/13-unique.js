/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
*/

const unique = array => {
    const newArr = array.reduce((accum, num) => {
        if (!accum.includes(num)) {
            accum.push(num)
        }
        return accum
    }, [])
    return newArr
};



console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
