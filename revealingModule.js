// Just like Module pattern, Revealing module pattern enables encapsulation in JS. 
// IIFE is basic principle of implementation as well, with the main difference that returned object contain aliases for private properties and methods - 
// they are not changed are called through some public function

var module = (function () {
  var name = 'Jelena';
  var age = 28;

  function setName(newName) {
    name = newName;
  }

  function getName() {
    return name;
  }

  function setAge(newAge) {
    age = newAge;
  }

  function getAge() {
    return age;
  }

  return {
    getName,
    getAge,
    setName,
    setAge
  }
})()

console.log('Name before change: ', module.getName());
console.log('Age before change: ', module.getAge());
module.setName('Jelena Milanovic');
module.setAge(29);
console.log('Name after change: ', module.getName());
console.log('Age after change: ', module.getAge());