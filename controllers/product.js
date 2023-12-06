/// controller


 

exports.create = async(req,res) => {
    res.send("Hello from product controller created!")
}
exports.list = async(req,res) => {
    res.send("Hello from product controller listed!")
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
    res.send(`Hello from product controller deleted! ${id}`)
}


