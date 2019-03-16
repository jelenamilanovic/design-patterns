// The idea which lies beyond Singleton pattern is to create only one instance of some class.
// So, the first call of the constructor will create a new instance and the others will just return created object.

// In JS, Singleton pattern is every object that is not instantiated from the class.
// There are, however, some alternatives to create a Singleton.

class Singleton {

  constructor(data) {
    if (!Singleton.instance) {
      Singleton.instance = data;
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

var s1 = new Singleton('s1');
var s2 = new Singleton('s2');

console.log(s1.getInstance());
console.log(s2.getInstance());
