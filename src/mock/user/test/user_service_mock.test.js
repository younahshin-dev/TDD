const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client.js');

describe(('user Login - Mock'), () => {

  const login = jest.fn(async () => {
    return 'success';
  }) //함수 목킹

  UserClient.mockImplementation((id, password) => {
    return {
      login
    }
  });

  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
    UserClient.mockClear();
    login.mockClear();
  });

  it('userService login', async () => {
    await userService.login('id', 'password');
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('id', 'password');
    await userService.login('id', 'password');
    
    expect(login.mock.calls.length).toBe(1);
  });

});