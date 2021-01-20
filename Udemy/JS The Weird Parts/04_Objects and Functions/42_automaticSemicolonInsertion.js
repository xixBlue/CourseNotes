// Always put in your own semicolons

/*
function getPerson() {
  return //actually runs return;
  {
    firstname: 'Tony'
  }
}
*/

function getPerson() {
  // Because we started the object literal on the same line as the return statement, it actually knows there is an object there and did not perform automatic semicolon insertion
  return {
    firstname: 'Tony'
  }; // Semi colon after the object to complete the return statement
}

console.log(getPerson());