
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/api/passengers', require('./routes/passenger.routes'));

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'))
})