const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))



require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to BPay-API',
}));
module.exports = app;
