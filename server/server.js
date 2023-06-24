const express = require('express');
const config = require('./config/mssql');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const packagesRoutes = require('./routes/packagesRoutes');

const app = express();
//Middlewares

app.use(cors());
app.use(bodyParser.json());

app.use('/AddProduct', packagesRoutes.routes);
app.use('/admin', usersRoutes.routes);
app.use('/bookform', usersRoutes.routes);


app.listen(config.port, () => console.log('server is up and listening on http://localhost:' + config.port));