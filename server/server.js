const express = require('express');
const config = require('./config/mssql');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const packagesRoutes = require('./routes/packagesRoutes');
const useraccoutsRoutes = require('./routes/useraccoutsRoutes');

const app = express();
//Middlewares

app.use(cors());
app.use(bodyParser.json());

app.use('/AddProduct', packagesRoutes.routes);
app.use('/', packagesRoutes.routes);
app.use('/admin', usersRoutes.routes);
app.use('/bookform', usersRoutes.routes);
app.use('/register', useraccoutsRoutes.routes);
app.use('/login', useraccoutsRoutes.routes);


app.listen(config.port, () => console.log('server is up and listening on http://localhost:' + config.port));