greet();

//Just a statement
function greet() {
  console.log('hi');
}


// Anonymous function
//function expression
//not hoisted
var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet();

//invoking the function passed as a parameter
function log(a) {
  a();
}

//passing an anonymous function
log(function() {
  console.log('Hi');
});