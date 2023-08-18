/*
Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.
You must use  `Array.forEach` in your solution.
Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
*/

const longestWord = sentence => {
    let words = sentence.split(' ');
    let longest = '';

    words.forEach(word => {
      if (word.length > longest.length) {
        longest = word;
      }
    });

    return longest;
  };

  console.log(longestWord('where did everyone go')); // 'everyone'
  console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
  console.log(longestWord('')); // ''









console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
