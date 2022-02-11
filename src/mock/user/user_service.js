class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //return fatch('http://example.com/login/id+password') 
      // .then((res) => res.json() );
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;