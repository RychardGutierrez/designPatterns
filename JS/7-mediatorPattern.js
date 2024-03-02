class Member {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, toMember) {
    this.chatroom.send(message, this, toMember);
  }

  recieve(message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.member = {};
  }

  addMember(member) {
    this.member[member.name] = member;
    member.chatroom = this;
  }

  send(message, fromMember, toMember) {
    toMember.recieve(message, fromMember);
  }
}

const chatroom = new Chatroom();

const john = new Member('John');
const jane = new Member('Jane');
const bob = new Member('Bob');

chatroom.addMember(john);
chatroom.addMember(jane);
chatroom.addMember(bob);

chatroom.send('Hello jane', john, jane);

chatroom.send('Hello bob', john, bob);

john.send('Hello everyone', jane);
