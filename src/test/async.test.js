const fetchProduct = require('../async.js');

describe('async test', () => {
  it('asyc-done way', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200});
      done(); // 5ms 정도 시간 소요
    });
  });

  it('asyc-return way', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200}); //1ms 바로 리턴
    });
  });

  it('asyc-await way',async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200}); 
    });
  });

  it('promise Reject', () => {
    return expect(fetchProduct('error')).rejects.toMatch('network error');
  });

  it('promise Resolve', () => {
    return expect(fetchProduct()).resolves.toStrictEqual({ item: 'Milk', price: 200});
  });
});
