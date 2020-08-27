var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person; // sets john prototype to person
console.log(john.getFullName()); // goes down the prototype chain to find getFullName()
console.log(john.firstname); // finds it in john since it is available

var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person; // sets jane prototype to person
console.log(jane.getFullName()); // outputs Jane Default, since jane doesn't have a lastname, it goes down the prototype chain to find lastname: Default