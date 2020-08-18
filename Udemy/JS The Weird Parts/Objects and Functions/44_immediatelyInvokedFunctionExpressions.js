// function statement
function greet(name) {

  console.log('Hello ' + name);

}

greet('John'); // classic invoking the function 

// using a function expression
var greetFunc = function(name){

  console.log('Hello ' + name);

};

greetFunc('John'); // classic invoking the function 

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name){
  
  return 'Hello ' + name;

}('John'); // Invoking the function right after it is made

//greeting is a string not a function
console.log(greeting);

var firstname = 'John';

// fucntion expression
(function(name){

  var greeting = 'Inside IIFE: Hello';
  console.log(greeting + ' ' + name);

}(firstname)); // IIFE