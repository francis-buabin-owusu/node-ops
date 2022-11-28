const Todos = require('../model')

const editTodoController = async () => {
    if (req.body.task != null) {
        res.todo.task = req.body.task
    }
    if (req.body.done != null) {
        res.todo.done = req.body.done
    }

    try {
        const updatedTodo = await res.todo.save()
        res.status(200).json(updatedTodo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    } 
}

module.exports = editTodoController