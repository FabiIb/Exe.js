class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstname() {
    return this._firstName;
    
  }
  get lastName() {
    return this._lastName;

  }
  get age() {
    return this._age;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  
  set firstName(newName) {
    this._firstName = newName;
  }

  set lastName(newSurname) {
    this._lastName = newSurname;
  }

  set age(newAge) {
    this._age = newAge;
  }

  
}



const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);