'use strict'
const cors = require('cors');


const companyRoutes = require('./Routes/company.routes');
const emissionfactorRoutes = require('./Routes/emissionfactor.routes');
const unitRoutes = require('./Routes/unit.routes');

const mainRoutes = require('./Routes/main.routes');


const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());  // Accept all CORS Methods

app.use('/api', router);

companyRoutes(router);
emissionfactorRoutes(router);
unitRoutes(router);

mainRoutes(router);

router.get('/', (req, res) => {
  res.send('Hello from home');
});

app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));