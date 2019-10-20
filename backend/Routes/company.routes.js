const Users = require('../Controllers/company.controller');
module.exports = (router) => {
  /* router.post('/register', Users.createUser); */
  router.post('/company', Users.getCompany);
  router.post('/all', Users.getAllCompany);
}