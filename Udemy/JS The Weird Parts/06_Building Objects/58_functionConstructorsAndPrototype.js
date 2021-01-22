function Person(firstname, lastname) {

  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked.');

}

// Adding a method to the prototype that gets inherited with the 'new' keyword.
/*
 All objects inheret the prototype, this is more efficient than adding the method to the function
 constructor, because it only gets created once instead of creating more memory space as a method
 within every object. 
*/
Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

// Adding a method to the prototype that gets inherited with the 'new' keyword.
// We can add to the prototype after creating the object and it still gets added to the objects.
Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname;
}

// The parser first searches the object for the method, it is not found in the object, so it then searches the prototype.
console.log(john.getFormalFullName());