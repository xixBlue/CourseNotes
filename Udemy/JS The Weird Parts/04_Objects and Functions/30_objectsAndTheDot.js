var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log('Person Object:')
console.log(person);
console.log(`Person First Name: ${person[firstNameProperty]}`);

console.log(`Person First Name: ${person.firstname}`);
console.log(`Person Last Name: ${person.lastname}`);

person.address = new Object();

const street = '111 Main St.';
const city = 'New York';
const state = 'NY';

person.address.street = street;
person.address.city = city;
person.address.state = state;

console.log(`Person Address Street: ${person.address.street}`);
console.log(`Person Address City: ${person.address.city}`);
console.log(`Person Address State: ${person["address"]["state"]}`);