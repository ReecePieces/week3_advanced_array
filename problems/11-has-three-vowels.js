/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
*/

const hasThreeVowels = string => {
    let vowels = 'aeiouAEIOU';
    let foundVowels = {};

    string.split('').forEach(char => {
      if (vowels.includes(char)) {
        foundVowels[char.toLowerCase()] = true;
      }
    });

    return Object.keys(foundVowels).length >= 3;
  };


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
