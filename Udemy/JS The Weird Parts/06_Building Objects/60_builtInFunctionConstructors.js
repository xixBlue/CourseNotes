
// adding to the existing String function prototype
String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

// calls the prototype, the string is converted to an object with the String function
console.log("John".isLengthGreaterThan(3));

// adding to the existing Number function prototype
Number.prototype.isPosistive = function(){
  return this > 0;
}

// unlike strings, this next line doesn't work because it doesnt call the Number function on numbers
// 3.isPositive()

// this works to access the prototype
var a = new Number(3);

// calls the prototype
console.log(a.isPosistive);