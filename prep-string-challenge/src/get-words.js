/* exported getWords */
function getWords(string) {
  const newArray = [];
  if (!string === true) {
    return newArray;
  } else {
    return string.split(' ');
  }
}
