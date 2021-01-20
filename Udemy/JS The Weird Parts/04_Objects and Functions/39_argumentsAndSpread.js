function greet(firstname, lastname, language, ...other) {
  
  // declaring a default for language, the more modern approach is to include the default when creating the function. i.e. function(language = 'es')
  language = language || 'en';

  // checking if there are no arguments past is as easy as checking the length of the argument array like variable
  if (arguments.length === 0){
    console.log('Missing Parameters!');
    console.log('---------------');
    return;
  }

  // console logging the parameters
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  // console log the array-like argument variable
  console.log(arguments);
  // the argument array-like variable can be accessed just like an array
  console.log('arg 0: ' + arguments[0]);

  // the last parameter we passed was ...other, this creates an array of every other parameter we pass into the function. This lets us access the variable name, in this case other, like an array and in turn use the forEach method on the array
  // we then pass an anonymous funtion into forEach that passes the array element of each iteration as a parameter, element, and console logs that parameter
  other.forEach( function(element){
    console.log(element);
  } )

  // a simple console log to add a seperator between outputs
  console.log('--------------------------');

}

// greet with no parameters, should return Missing Parameters as we checked for this on line 7
greet();
// greet with 1 or 2 parameters, outputs the parameter along with the default value for language we set on line 4 or could have set in the creation of the function
greet('John');
greet('John', 'Doe');
// greet with three parameters bypasses our language default as we are passing a language value 
greet('John', 'Doe', 'es');
// greet with more than 3 parameters adds the 4th and subsequent parameters to the ...other array
greet('John', 'Doe', 'es', '111 Main St.', 'New York')