const items = [1, 'dev', false, 1.34];

class Iterator {
  constructor(items) {
    this.items = items;
    this.index = items.length - 1; // 0
  }

  hasNext() {
    // return this.index < this.items.length;
    return this.index >= 0;
  }

  next() {
    // return this.items[this.index++];
    return this.items[this.index--];
  }
}

const iter = new Iterator(items);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());
