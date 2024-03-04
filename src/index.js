const readlineSync = require('readline-sync');

class Calculator {
  constructor() {
    this.a = 0;
    this.b = 0;
  }
  read() {
    this.a = parseInt(readlineSync.question('Введите число a '));
    this.b = parseInt(readlineSync.question('Введите число b '));
  }
  sum() {
    return this.a + this.b
  }
  mul() {
    return this.a * this.b
  }
};

const myCalc = new Calculator();
myCalc.read();
console.log(`Сумма ${myCalc.sum()}`);
console.log(`Произведение ${myCalc.mul()}`);
