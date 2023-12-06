const express = require('express');
const mongoose = require('mongoose');
// middleware
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// port
const PORT = 1500
const app = express();

// routes
// const authRoute = require('./routes/auth')
// const productRoute = require('./routes/product');

const {readdirSync} = require('fs')


app.use(morgan('dev'))

// app.use('/api',authRoute);
// app.use('/api',productRoute);

readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))


app.listen(PORT, () => console.log(`app listening on ${PORT}`));