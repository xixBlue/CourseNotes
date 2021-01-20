function mapForEach(arr, fn) { // asking for an array and a function to use

  var newArr = [];
  for (var i=0; i < arr.length; i++){
    newArr.push(
      fn(arr[i]) // for each item in the array, we call the function passed in
    )
  };

  return newArr; // return the new array
}




var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
  return item * 2; // for each item we multiply by two
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
  return item > 2; // for each item we check if greater than 2
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
  return item > limiter; // we check if each item is greater than the limiter
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)); // we bind since our mapForEach function only expects a function with one parameter
console.log(arr4);

var checkPastLimitSimplified = function(limiter) {
  return function(limiter, item) { // we return a function
    return item > limiter;
  }.bind(this, limiter); // we bind the returned function with the limiter variable
}
var arr5 = mapForEach(arr1, checkPastLimitSimplified(1)); // we only call it with the limiter since it returns a function with the limiter binded and asking only for an item
console.log(arr5);