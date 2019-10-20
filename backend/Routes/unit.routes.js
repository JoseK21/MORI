const Users = require('../Controllers/unit.controller');
module.exports = (router) => {
  /* router.post('/register', Users.createUser); */
  router.post('/unit', Users.getUnit);
  router.post('/allUnits', Users.getAllUnits);
}