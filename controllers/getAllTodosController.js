 const Todos = require('../model')

const getAllTodosConteroller = async (req, res) => {
    try {
        const todos = await Todos.find()
        res.json(todos)
    } catch (err) {
        res.status(401)
    }
}

module.exports = getAllTodosConteroller