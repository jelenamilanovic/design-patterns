// Prototype pattern can improve code execution by allocating 
// shared methods and properties of objects only once, instead of allocating it for every object separately.

function introduceSelf () {
  console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old.');
}

function Person (name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
Person.prototype.introduceSelf = introduceSelf;

// TEST:
let p1 = new Person ('Ann', 28, 'ann@mail.com');
let p2 = new Person ('Sarah', 24, 'sarah@mail.com');

p1.introduceSelf();
p2.introduceSelf();
