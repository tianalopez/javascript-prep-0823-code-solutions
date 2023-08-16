// create your loops here.
function whileLoop1() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(2 * i);
    i++;
  }
  return newArray;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log(`Time till explosion ${i}!`);
  }
}
// Don't put console log, because the final value will be undefined
console.log(forLoop2());

function forInLoop1(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log(forInLoop1(object));

function forInLoop2(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
console.log(forInLoop2(object));
