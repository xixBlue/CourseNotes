//object literal syntax
//takes two keys with values
//one key has a primitive string value
//one key has a primitive boolean value
var objectLiteral = {
  firstName: 'Mary',
  isAProgrammer: true
}


//JSON.stringify converts a javascript object to a JSON string
console.log(JSON.stringify(objectLiteral));


//JSON.parse takes a JSON string and converts to a javascript object
var jsonValue = JSON.parse('{ "firstName": "Mary",  "isAProgrammer": true }');


console.log(jsonValue);