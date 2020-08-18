
function greet(whattosay) {

  // we return a first class function using the whattosay variable
  return function(name) {
    console.log(whattosay + ' ' + name);
  }

}

// execution stack is created for greet()
var sayHi = greet('Hi');
// greet() execution stack pops off, leaving whattosay variable in memory

// execution stack is created for sayHi()
// whattosay variable remains in closure and is used in calling sayHi()
sayHi('Tony');