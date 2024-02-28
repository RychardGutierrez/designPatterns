class Fedex {
  calcualte(packageToDelibery) {
    // Add logic to calculate
    return 2.45;
  }
}

class Ups {
  calcualte(packageToDelibery) {
    // Add logic to calculate
    return 5.45;
  }
}

class PremiunUps {
  calcualte(packageToDelibery) {
    // Add logic to calculate
    return 12.0;
  }
}

class StrategyShipping {
  constructor() {
    this.company = '';
  }

  setStrategy(company) {
    this.company = company;
  }

  calculate(packageToDelibery) {
    return this.company.calcualte(packageToDelibery);
  }
}

const packageToDelibery = { from: 'Alabama', to: 'Georgia', weight: 1.5 };

const fedex = new Fedex();
const ups = new Ups();
const premiumUps = new PremiunUps();

const shipping = new StrategyShipping();
shipping.setStrategy(fedex);
const calculateByFedex = shipping.calculate(packageToDelibery);

console.log(calculateByFedex);

shipping.setStrategy(ups);
const calculateByUps = shipping.calculate(packageToDelibery);
console.log(calculateByUps);
