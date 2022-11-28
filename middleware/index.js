const Todos = require('../model')

const getID = async (req, res, next) => {
    let todo
    try {
        todo = await Todos.findById(req.params.id)
        if (!todo) {
            return res.status(404).json({ message: "TODO NOT FOUND" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    // create a todo variable on the res obj
    res.todo = todo

    next()
}

module.exports = getID