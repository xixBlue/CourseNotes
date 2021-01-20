function sayHiLater() {
  
  var greeting = 'Hi!';

  setTimeout(function() { // passing in a call back function, also a first-class function created on the fly
    
    console.log(greeting); // greeting will be gone when sayHiLater is done running, it will be in the closure
  
  }, 3000); // gets called after 3000 milliseconds

}

sayHiLater();



function tellMeWhenDone(callback) {

  var a = 1000; // some work
  var b = 2000; // some work

  callback(); // the 'callback', it runs the function I give it!

}

tellMeWhenDone(function() {

  console.log('I am done!'); // will run after tellMeWhenDone

})


tellMeWhenDone(function() {

  alert('I am done!'); // will run after tellMeWhenDone

})