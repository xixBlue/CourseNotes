
// 'this' refers to the global object inside of functions
function a(){
  console.log(this);
  this.newvariable = 'hello';
}

// 'this' refers to the global object inside of functions
var b = function() {
  console.log(this);
}

// invoking a console logs the global object
a();

// because we tied newvariable inside the a function to the global object, it is accessible globally as it sits on the global, window object
console.log(newvariable);

// invoking b console logs the global object
b();


// inside of objects, however, 'this' refers to the object the method is tied to
var c = {
  name: 'The c object',
  log: function() {
    // we declare self and tie it to the object itself so that in inner functions, when we refer to self, we still refer to the object its tied into
    var self = this;

    // using self here refers to 'this' which refers to the object
    self.name = 'Updated c object';
    console.log(self);

    // inside of inner functions in objects, 'this' goes back to refering to the global object, that's why we use self instead, so that we can still refer to the object instead of the global object. 
    var setName = function(newName) {
      self.name = newName;
    }
    // when we call the inner function, since we used self, which was tied to 'this' in the outer part of the method, we are accessing the value of the object itself.
    setName('Updated again! The c object');

    // we console log the object variable here. 
    console.log(self);
  }
}

c.log();