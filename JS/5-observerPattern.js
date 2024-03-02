class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unSubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.call());
  }
}

const observer1 = function () {
  console.log('Observer 1 called');
};

const observer2 = function () {
  console.log('Observer 2 called');
};

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify();

subject.unSubscribe(observer2);

subject.notify();
