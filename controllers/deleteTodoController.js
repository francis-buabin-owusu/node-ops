const Todos = require('../model')

const deleteTodoController = async () => {
    try {
        await res.todo.remove()
        res.status(200).json({ message: `Successfully deleted task: ${res.todo}` })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = deleteTodoController