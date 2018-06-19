const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan= require('morgan');

const configureSortRoutes = require('./routes');

// middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan(':method :status :res[content-length] :response-time ms'));

// base route
app.get('/', (req, res) => {
  res.send('hello, please use sort endpoints');
});

// setup sort routes
configureSortRoutes(app);

/* eslint-disable-next-line no-console */
app.listen(3000, () => console.log('running on 3000'));

