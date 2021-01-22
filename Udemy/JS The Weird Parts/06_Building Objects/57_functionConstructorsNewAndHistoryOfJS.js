function Person(firstname, lastname) {

  console.log(this); // Logs 'this' to the console.
  this.firstname = firstname; // Sets this.firstname to the parameter.
  this.lastname = lastname; // Sets this.lastname to the parameter.
  console.log('This function is invoked.')

  // return { greeting: 'I got in the way.'}
  // If a return is set, the object gets created with the return statement.
}

// The 'new' keyword constructs a new object and runs the function within that object.
var john = new Person('John', 'Doe'); // Creates a new object, using the Person function with its parameters.
console.log(john); // Logs the object created to the console.

// The 'new' keyword constructs a new object and runs the function within that object.
var jane = new Person('Jane', 'Doe'); // Creates a new object, using the Person function with its parameters.
console.log(jane) // Logs the object created to the console.

/*
Function Constructors:
A normal function that is used to construct objects.

The 'this' variable points a new empty object, and that object is returned from the function automatically
*/