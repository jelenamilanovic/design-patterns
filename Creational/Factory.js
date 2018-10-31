// Factory pattern is a creational pattern.
// The implementation of the pattern is based on the idea that subclasses of the factory are concerned with the details of the instantiation.
// It is used when the classes have a lot of similar properties (but different values).

class UserFactory {
  createUser(userType) {
  	let user;
    if (userType === 'superadmin') {
      user = new SuperAdmin();
    } else if (userType === 'admin') {
      user = new Admin();
    } else {
      user = new User();
    }
    return user;

    // could be expanded with some shared properties/methods 
    // but we could, also, create a class which all of the above classes would inherit
  }
}

class SuperAdmin {
  constructor() {
    this.accessPages = ['Home', 'Contact', 'About', 'CMS', 'Database'];
  }
}

class Admin {
  constructor() {
    this.accessPages = ['Home', 'Contact', 'About', 'CMS'];
  }
}

class User {
  constructor() {
    this.accessPages = ['Home', 'Contact', 'About'];
  }
}

// TEST:
let userFactory = new UserFactory();
let users = [];
users.push(userFactory.createUser('user'));
users.push(userFactory.createUser('admin'));
users.push(userFactory.createUser('superadmin'));

users.forEach(user => {
	console.log(user);
})