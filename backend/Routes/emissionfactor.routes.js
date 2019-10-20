const Users = require('../Controllers/emissionfactor.controller');
module.exports = (router) => {
  /* router.post('/register', Users.createUser); */
  router.post('/factorEmission', Users.getEmissionFactor);
  router.post('/allFactorEmission', Users.getAllFactors); 
}
