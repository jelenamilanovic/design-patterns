// Decorator pattern is structural design pattern which is used to extend object's functionality and attach additional properties dynamically, at runtime.
// It is an alternative to subclassing for extending functionality.
// The concrete example below shows how the price of the product can be easily set up, depending on chosen ingredients.

class PizzaBasic {
	constructor () {
  	this.ingredients = ['dough', 'tomato sauce'];
    this.price = 50;
  }
}

class PizzaCapricciosa {
	constructor(pizza) {
  	this.ingredients = pizza.ingredients.concat(['ham', 'mushrooms', 'mozarella']);
    this.price = this.setPrice(pizza.price);
  }
  
  setPrice (pizzaPrice) {
  	return pizzaPrice + 150;
  }
}

class PizzaChilli {
	constructor(pizza) {
  	this.ingredients = pizza.ingredients.concat(['chilli pepper']);
    this.price = this.setPrice(pizza.price);
  }
  
  setPrice (pizzaPrice) {
  	return pizzaPrice + 30;
  }
}

let customPizza = new PizzaChilli(new PizzaCapricciosa(new PizzaBasic()));
console.log('Custom pizza: ', customPizza);