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

// Read All Products
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

// Read Product from id
exports.read = async(req,res) => {
    const id = req.params.id
    try {
        const readProductById = await Products.findOne({_id: id}).exec()
        res.json(readProductById)
    }
    catch (error){
        console.log(error)
        res.status(400).send(`Server Read from id error: ${error.message}`)
    }
}

// Update Product from id
exports.update = async(req,res) => {
    const id = req.params.id
    const body = req.body

    try{
        const updateProductById = await Products.findOneAndUpdate({_id: id}, body, {new: true}).exec()
        res.json(updateProductById)

    }
    catch(error){
        console.log(error)
        res.status(400).send(`Server Update from id error: ${error.message}`)
    }
    
}


exports.remove = async(req,res) => {
    const id = req.params.id
    res.send(`Hello from product controller readed! ${id}`)
}


