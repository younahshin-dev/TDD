const ProductClient = require('../product_client.js');
const ProductService = require('../product_service_no_di.js');
jest.mock('../product_client.js'); //가짜 프로덕트 클라이언트를 사용할거야!

describe('product_service no di test', () => {
  let productService;
  
  const fetchItems = jest.fn(async () => { 
    return [{
      'item': 'Milk',
      'available' : true,
    },{
      'item': 'Banana',
      'available' : false,
  }]});

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  });
  
  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it('soult filter out only available items', async () => {
    const itemsAvail = await productService.fetchAvailableItems();
    
    expect(itemsAvail).toEqual([{item: 'Milk', available : true,}]);
    expect(itemsAvail.length).toBe(1);
  });

  it('test', async () => {
    const itemsAvail = await productService.fetchAvailableItems();
    
    expect(fetchItems).toHaveBeenCalledTimes(1); //jest.config.js의 clearMocks = true 일경우 테스트 수행시 마다 mock함수가 초기화 되어서 성공 만약 false라고 하면  it('soult filte... 에서 service에서 내부적으로 호출되는 fetchItem 때문에 결과가 2가 된다. => beforeEash에서 mock.clear()필요
    
  });
});