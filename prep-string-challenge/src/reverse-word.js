/* exported reverseWord */
function reverseWord(word) {
  let emptyString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    emptyString += word[i];
  }
  return emptyString;
}
