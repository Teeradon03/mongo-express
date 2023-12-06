const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async(req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB connected')

    }
    catch(err) {
        console.log(err)
    }
}

module.exports = connectDB