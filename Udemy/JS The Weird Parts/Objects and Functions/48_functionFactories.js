function makeGreeting(language) { // Creates a new execution context everytime it's called

  return function(firstname, lastname){

    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  
  }

}

// creates a new execution stack with en as language
var greetEnglish = makeGreeting('en');
// creates a new execution stack with es as language
var greetSpanish = makeGreeting('es');

// has access to language as en in the closure of invoking makeGreeting('en')
greetEnglish('John', 'Doe');
// has access to language as es in the closure of invoking makeGreeting('es')
greetSpanish('John', 'Doe');