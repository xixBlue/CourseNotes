function greet(firstname, lastname, language = 'en'){
  
  // another way to default language to english
  language = language || 'en';

  // check for language being en
  if (language === 'en'){
    console.log('Hello ' + firstname + ' ' + lastname);
  }

  // check for language being es
  if (language === 'es'){
    console.log('Hola ' + firstname + ' ' + lastname);
  }
}

// we call greet with less parameters because we pass in en as language in the call
function greetEnglish(firstname, lastname){
  greet(firstname, lastname, 'en');
}

// we call greet with less parameters because we pass in es as language in the call
function greetSpanish(firstname, lastname){
  greet(firstname, lastname, 'es');
}

// call our overloaded functions
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');