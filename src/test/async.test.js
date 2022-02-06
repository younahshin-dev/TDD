const fetchProduct = require('../async.js');

describe('async test', () => {
  it('promise Reject', () => {
    return expect(fetchProduct('error')).rejects.toMatch('network error');
  });

  it('promise Resolve', () => {
    return expect(fetchProduct()).resolves.toStrictEqual({ item: 'Milk', price: 200});
  });
});
