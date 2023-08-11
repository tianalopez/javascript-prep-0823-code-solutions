const person = {
  firstName: 'Jim',
  lastName: 'Jones',
  hobby: 'fishing',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Farmer';
console.log("The person's current job is: " + person.job);

person['previousJob'] = 'Banker';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
