const Calculator = require('../calculator.js');

describe('Calculator', () => {  
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with o', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.clear();
    cal.add(2);
    expect(cal.value).toBe(2);
  });

  it('adds should throw an error if sum is grater than 100', () => {
    // cal.add(101); -> throw error 가 정상 동작임
    expect(()=>{
      cal.add(101)
    }).toThrow('Value can not be greater than 100'); //-> jest docs exception part
  });

  it('subtract', () => {
    cal.set(4);
    cal.subtract(3);
    expect(cal.value).toBe(1);
  });

  it('multiply', () => {
    cal.set(10);
    cal.multiply(2);
    expect(cal.value).toBe(20);
  });
  describe('divide examples', ()=>{
    it('divide 0/0 === Nan', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    
    it('divide 25/5 === 5', () => {
      cal.set(25);
      cal.divide(5);
      expect(cal.value).toBe(5);
    });

    it('divide 25/0 === Infinity', () => {
      cal.set(25);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('divide 0/2 === 0', () => {
      cal.clear();
      cal.divide(2);
      expect(cal.value).toBe(0);
    });

    it('divide 0/-2 === -0', () => {
      cal.clear();
      cal.divide(-2);
      expect(cal.value).toBe(-0);
    });

    it('divide -2/2 ===-1', () => {
      cal.set(-2);
      cal.divide(2);
      expect(cal.value).toBe(-1);
    });

  });

});