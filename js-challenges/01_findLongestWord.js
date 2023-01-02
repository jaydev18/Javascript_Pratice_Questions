//find the longest word in a string.

/**
 *let's "i woke up early today" -> longest word ______
 *Step-1 : make str to word of array of that i need to split first  */

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord("I woke up early today"));
