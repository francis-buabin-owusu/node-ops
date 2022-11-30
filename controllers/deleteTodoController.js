const Todos = require('../model')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const deleteTodoController = async (req, res) => {
    try {
        await Todos.findByIdAndDelete(ObjectId(req.todoID))
        res.status(200).json({ message: `Deleted successfully` })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = deleteTodoController