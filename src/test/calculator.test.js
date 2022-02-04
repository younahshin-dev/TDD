const Calculator = require('../calculator.js');


test('test Calculator class', () => {
  
  const calculator = new Calculator();
  
  calculator.set(1);
  calculator.add(2);
  expect(calculator.value).toBe(3);
  
  calculator.clear();
  calculator.subtract(2);
  expect(calculator.value).toBe(-2);
  
  calculator.set(2);
  calculator.multiply(2);
  expect(calculator.value).toBe(4);
  
  calculator.divide(4);
  expect(calculator.value).toBe(1);
  
})