
const authRoutes = require('./auth/auth.routes');
const passengerRoutes = require('./routes/passenger.routes')

const propierties = require('./config/properties');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();

const DB = require('./config/db');
// init DB
DB();
const routerAuth = express.Router();
const routerPassengers = express.Router();

//const { mongoose } = require('./database');

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', routerAuth);
authRoutes(routerAuth);

app.use('/api/passengers', routerPassengers);
passengerRoutes(routerPassengers);

app.use(routerAuth);
app.use(routerPassengers);

// Starting server
app.listen(propierties.PORT, () => {
    console.log(`Server runing on port ${propierties.PORT}`)
})
