const Todos = require('../model')

const postTodoController = async () => { 
    const todo = new Todos({
        task: req.body.task,
        done: req.body.done
    })

    try {
        const newTodo = await todo.save()
        res.status(201).json(newTodo)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = postTodoController