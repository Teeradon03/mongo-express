/// model

const Products = require('../models/Product')

/// controller

// Create Product
exports.create = async(req,res) => {
    const data = req.body
    try {
        const newProducts = await new Products(data).save()
        res.json(newProducts)
    }
    catch (error) {
        console.log(error)
        res.status(400).send(`Server Create error: ${error.message}`)
    }
}

// Read Products
exports.list = async(req,res) => {
    try {
        const lisProducts = await Products.find({}).exec()
        res.json(lisProducts)
    }
    catch (error){
        console.log(error)
        res.status(400).send(`Server Read error: ${error.message}`)
    }
}
exports.read = async(req,res) => {
    const id = req.params.id
    res.send(`Hello from product controller readed! ${id}`)
}
exports.update = async(req,res) => {
    const id = req.params.id
    res.send(`Hello from product controller updated! ${id}`)
}
exports.remove = async(req,res) => {
    const id = req.params.id
    res.send(`Hello from product controller readed! ${id}`)
}


