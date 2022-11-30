const Todos = require('../model')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const editTodoController = async (req, res) => {
    const {task, done} = req.body

    try {
        if(!task) return res.status(400).json({message: 'Found empty fields'})

        const updatedTodo = await Todos.findByIdAndUpdate(ObjectId(req.todoID), {task, done})
        return res.status(200).json(updatedTodo)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    } 
}

module.exports = editTodoController