//functions are objects
function greet(){
  console.log('hi');
}

//wee can attach to the function
greet.language = 'english';


console.log(greet.language);
console.log(greet.name);

greet();