const ProductService = require('../product_service_di.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('Stub sould filter out only available items', async () => {
    const itemsAvail = await productService.fetchAvailableItems();
    
    expect(itemsAvail).toEqual([{item: 'Milk', available : true,}]);
    expect(itemsAvail.length).toBe(1);
  })
 
});