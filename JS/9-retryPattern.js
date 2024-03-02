class RetryOperation {
  constructor() {
    this.attempts = 0;
  }
  retry() {
    while (true) {
      try {
        externalServicall();
        console.log('Success');
      } catch (error) {
        this.attempts++;
        if (this.attempts > 3) {
          console.log('Failed');
          throw error;
        }
        console.log(`Retry ${this.attempts}`);
      }
    }
  }
}

function externalServicall() {
  throw 'error connection';
}

const retry = new RetryOperation();
retry.retry();

/*
    Retry Design Pattern -> https://www.youtube.com/watch?v=fYZfFdbr8mc
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

async function retryOperation() {
  let currentTry = 0;

  while (true) {
    try {
      externalServiceCall();
      console.log('Succeeded!');
      break;
    } catch (error) {
      currentTry++;
      console.log(`Failed attempt ${currentTry}`);

      if (currentTry >= 10) {
        console.log('Retry maximum reached. Exiting');
        break;
      }
    }
    await sleep(3000);
  }
}

function externalServiceCall() {
  console.log('Calling external service...');
  const shouldPass = Math.random() < 0.4;
  if (shouldPass) return true;
  else throw 'Failure';
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

retryOperation();
