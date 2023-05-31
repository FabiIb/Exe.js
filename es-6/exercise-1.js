const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

let list = Object.keys(person);
for (let i in list) {
  console.log(`${list[i]}: ${person[list[i]]}`);
}