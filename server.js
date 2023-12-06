const express = require('express');
const mongoose = require('mongoose');
// middleware
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// port
const PORT = 1500
const app = express();

const {readdirSync} = require('fs')

app.use(morgan('dev'))

readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))


app.listen(PORT, () => console.log(`app listening on ${PORT}`));