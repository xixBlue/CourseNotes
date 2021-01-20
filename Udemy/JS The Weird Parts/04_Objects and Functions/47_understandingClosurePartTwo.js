// ES5 Initial Problem
function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    // This for loop is exited when i=3, so the last value for i is 3

    arr.push( // We are only pushing the function, we are not invoking it
      function() {
        console.log(i); // This console log is not called, its only pushed to the array as part of the function
      }
    )
  
  }

  return arr; // returns the array full of functions
}

var fs = buildFunctions();

console.log('---------ES5 Initial Problem------------')
fs[0](); // Outputs 3, we are now invoking the function inside the array and its searching for i in closure which is i's last value of 3
fs[1](); // Outputs 3
fs[2](); // Outputs 3

// ES6 workaround
function buildFunctions2() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    
    // We declare j as a blocked scoped variable
    let j = i;
    arr.push(
      function() {
        // j will be the value of runnin i
        console.log(j);
      }
    )
  
  }

  return arr;
}

var fs2 = buildFunctions2();

console.log('--------ES6--------');
fs2[0](); // outputs 0, because of block scoping j, we get the value of j while it was when running the for loop
fs2[1](); // outputs 1
fs2[2](); // outputs 2

// ES5 workaround
function buildFunctions3() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      // we create another execution context everytime the for loop iterates
      // passing in j
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i)) // we immediatly invoke the function passing in i at the time it iterates for j, creating different closures for each iteration
    )
  
  }

  return arr;
}

var fs3 = buildFunctions3();

console.log('-------ES5--------')
fs3[0](); // outputs 0 from the first closure
fs3[1](); // outputs 1 from the second closure
fs3[2](); // outputs 2 from the third closure