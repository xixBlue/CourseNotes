var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() { // method of the person object

    var fullname = this.firstname + ' ' + this.lastname; // uses the 'this' keyword, which points to the object
    return fullname;

  }
}

var logName = function(lang1, lang2) {

  
  console.log('Logged: ' + this.getFullName()); 
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-------------')

}

var logPersonName = logName.bind(person); // bind allows to point the 'this' keyword to an abject of our choosing 
logPersonName('en'); // we call the function while passing parameters

logName.call(person, 'en', 'es'); // call invokes the function and lets us pass the this object as well as the parameters
logName.apply(person, ['en', 'es']); // apply is the same as call except parameters are passed as an array

(function(lang1, lang2) { // creating a function expression on the fly

  
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-------------')

}).apply(person, ['es' , 'en']); // immediatly invoking the function using the apply method and passing in person as this and an array of parameters


// function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

console.log(person.getFullName.apply(person2)); // we call the method inside of person and use apply to invoke it with person2

// function currying - Creating a copy of a function but with some preset parameters
function multiply(a, b) {
  return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); // bind allows us to establish permanent parameters
console.log(multiplyByTwo(4)); // the 4 is the second parameter as the first one is already established

var multiplyByThree = multiply.bind(this, 3); // bind allows us to establish permanent parameters
console.log(multiplyByThree(4)); // the 4 is the second parameter as the first one is already established