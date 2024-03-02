class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  accept(visitorFunction) {
    visitorFunction(this);
  }
}

const employee1 = new Employee('John', 100);

class ExtraSalaryVisitor {
  visit(employee) {
    employee.setSalary(employee.salary + 100);
  }
}

employee1.accept(new ExtraSalaryVisitor().visit);

console.log(employee1.getSalary());
