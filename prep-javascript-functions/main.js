// Add numbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addition = addTwoNumbers(2, 2);
console.log(addition);

// Hours to Minutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

const hoursToMinutes = convertHoursToMinutes(2);
console.log(hoursToMinutes);

// Greeting
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const greeting = getGreeting('Bob');
console.log(greeting);

// Add and Multiply
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addMultiply = addAndMultiplyBy5(2, 3);
console.log(addMultiply);

// Multiply and Divide
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyDivide = multiplyAndDivideBy5(35, 10);
console.log(multiplyDivide);

// Subtract
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

// Circumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circleCircumference = getCircleCircumference(5);
console.log(circleCircumference);

// Full Name
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Bob', 'Dylan');
console.log(fullName);

// cube
function cube(number) {
  return number ** 3;
}

const cubedNumber = cube(5);
console.log(cubedNumber);
