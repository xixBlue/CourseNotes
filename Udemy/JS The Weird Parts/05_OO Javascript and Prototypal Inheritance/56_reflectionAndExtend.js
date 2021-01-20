// Reflection - An object can look at itself listing and changing its properties and methods.
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

for (var prop in john){
  if (john.hasOwnProperty(prop)){
  console.log(prop + ': ' + john[prop]);
  }
}

var jane = {
  address: '111 Main St.',
  getFormalFullName: function() {
    return this.lastname + ', ' + this.firstname;
  }
}

var jim = {
  getFirstName: function() {
    return this.firstname;
  }
}

_.extend(john, jane, jim); // we add jane and jim properties to john using underscore

console.log(john);