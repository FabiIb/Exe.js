const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

// in javascript i "data-type" come objects vengono assegnati alla variabile per riferimento, quindi la variabile
// riceve il riferimento che punta all'allocazione di memoria relativa in questo caso all'oggetto.
// In questo esercizio alla variabile person2 è assegnato l'oggetto person1, quindi person1 e 2 si riferiscono alla
//stessa posizione di memoria, per questo il cambiamento si riflette su entrambi

console.log(person1);
console.log(person2);
