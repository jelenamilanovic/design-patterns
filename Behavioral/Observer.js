// Observer pattern is behavioral pattern.
// This pattern is constituted of:
//    1) an object emitting the notification when some change happens (Subject),
//    2) a list of objects which react to that change (Observers).

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe() {
    for (let i in arguments) {
      this.observers.push(arguments[i]);
    }
  }

  unsubscribe() {
    for (let i in arguments) {
      let observer = this.find(arguments[i]);
      if (observer) {
        let i = this.observers.indexOf(observer);
        this.observers.splice(i, 1);
      }
    }
  }

  notify(observer) {
    let subscribedObserver = this.find(observer);
    if (subscribedObserver) {
      subscribedObserver.update();
    }
  }

  notifyAll() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }

  find(observerEl) {
    return this.observers.find(observer => {
      return observer.id === observerEl.id
    })
  }
}

class Observer {
  constructor(id) {
    this.id = id;
  }

  update() {
    console.log('Observer with id ' + this.id + ' is notified of the change and should be updated.');
  }
}

// TEST:

let sub = new Subject();

let o1 = new Observer(1);
let o2 = new Observer(2);
let o3 = new Observer(3);
let o4 = new Observer(4);
let o5 = new Observer(5);

sub.subscribe(o1, o2, o3)
sub.notifyAll();

sub.notify(o4);
sub.notify(o2);

sub.unsubscribe(o2, o3);

sub.subscribe(o5);

sub.notifyAll();

