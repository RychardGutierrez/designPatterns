class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.process = 0;
      Singleton.instance = this;
    }
    this.process++;
    return Singleton.instance;
  }

  static getInstance() {
    return new Singleton();
  }

  getProcess() {
    return this.process;
  }
}

const process1 = Singleton.getInstance();
const process2 = Singleton.getInstance();

console.log(process1 === process2);
console.log(process1);
console.log(process2.getProcess());

