const express = require('express');
const mongoose = require('mongoose');
// middleware
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// port
const PORT = 1500
const app = express();

// db
const connectDB = require('./configs/db')


const {readdirSync} = require('fs')

app.use(morgan('dev'))
app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({ extended: true}))

connectDB()


readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))


app.listen(PORT, () => console.log(`app listening on ${PORT}`));