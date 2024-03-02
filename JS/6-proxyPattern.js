class CryptoCoinAPI {
  getValue(coin) {
    console.log('Call server');
    switch (coin) {
      case 'bitcoin':
        return '$8.00';

      case 'litecoin':
        return '$1.00';

      case 'ethereum':
        return '$5.00';
    }
  }
}

//
class CryptoCoinProxy {
  constructor(api) {
    this.cache = {};
    this.api = api;
  }

  getValue(coin) {
    if (!this.cache[coin]) {
      this.cache[coin] = this.api.getValue(coin);
    }

    return this.cache[coin];
  }
}

const proxy = new CryptoCoinProxy(new CryptoCoinAPI());
console.log(proxy.getValue('bitcoin'));
console.log(proxy.getValue('litecoin'));
console.log(proxy.getValue('ethereum'));
console.log(proxy.getValue('bitcoin'));
console.log(proxy.getValue('ethereum'));
console.log(proxy.getValue('litecoin'));
