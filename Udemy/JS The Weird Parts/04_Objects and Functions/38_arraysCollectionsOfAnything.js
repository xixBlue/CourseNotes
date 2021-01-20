// arrays can hold anything since javascript is dynamically typed. 
var arr = [
  1, 
  false, 
  // it can hold objects which can be accessed the the dot operator
  {
    name: 'Tony',
    address: '111 Main St.'
  },
  // it can even hold functions, for instance this anonymous function 
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  // or primitive types like this string
  'hello'
];

// lets console log the whole array
console.log(arr);

// lets call the anonymous function within the array and then pass in the name value of the object inside the array.
arr[3](arr[2].name);