class Developer {
  name = '';
  type = 'Developer';
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  get type() {
    return this.type;
  }
}

class Tester {
  name = '';
  type = 'Tester';
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  get type() {
    return this.type;
  }
}

class EmployeeFactory {
  static create(name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  }
}

function say() {
  console.log(this.name, this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(EmployeeFactory.create('John', 1));
employees.push(EmployeeFactory.create('Jane', 2));

employees.forEach((emp) => say.call(emp));
