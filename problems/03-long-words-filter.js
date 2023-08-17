/*

Write a function `longWords(words)` that takes in an array of words.
The function should return an array containing only the words that are longer
than 5 characters.

Solve this using Array's `filter()` method.
*/
let words = ['bike', 'skateboard','scooter', 'moped', 'couscous', 'soup', 'ceviche', 'solyanka' ,'taco']
// [ 'couscous', 'ceviche', 'solyanka' ]


const longWords = words => {
let longWords = words.filter(word => word.length > 5);
return longWords
}


console.log(longWords);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longWords;
} catch (e) {
  module.exports = null;
}
