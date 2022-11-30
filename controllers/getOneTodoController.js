const Todos = require('../model')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const getOneTodoController = async (req, res) => {
    try {
        const todo = await Todos.findOne({_id : ObjectId(req.todoID)})
        return res.status(200).json(todo)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

module.exports = getOneTodoController