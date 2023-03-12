const express = require('express');
const config = require('./config/mssql');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
//Middlewares

app.use(cors());
app.use(bodyParser.json());

app.use('/admin', usersRoutes.routes);


app.listen(config.port, () => console.log('server is up and listening on http://localhost:' + config.port));