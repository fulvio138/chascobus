const Users = require('./auth.controller');

module.exports = (router) => {
  router.get('/', Users.getUsers);
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
}
