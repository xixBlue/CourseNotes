// IIFE
// Creates its own execution stack with its own variables and code
(function(global, name) {

  // Because it has its own execution stack, this greeting variable does not collide with the global object greeting variable
  var greeting = 'Hello ';
  global.greeting = 'Hello '; // Intentionally mutating the global object
  console.log(greeting + ' ' + name);

}(window, 'John')) // IIFE, In this case the global object is window

// We still have access to the global variables on the global object
console.log(greeting);