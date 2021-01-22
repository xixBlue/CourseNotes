// Polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
    throw new Error('Object.create implementation only accepts the first parameter');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person); // Creates an empty object with the person object as its prototype
john.firstname = 'John'; // adds to the john object and overrides the person prototype
john.lastname = 'Doe'; // adds to the john object and overrides the person prototype
console.log(john); // logs to the console the john object

console.log(john.greet()); // calls the greet method in the prototype created by the person object


/*
Polyfill:
Code that adds a feature which the engine may lack.
*/