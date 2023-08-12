/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  }
  if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('James Bond');
      break;
    case 'comedy':
      console.log('The Simpsons');
      break;
    case 'horror':
      console.log('The Conjuring');
      break;
    case 'drama':
      console.log('The Notebook');
      break;
    case 'musical':
      console.log('Highschool Musical');
      break;
    case 'sci-fi':
      console.log("Ender's Game");
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}
