const Todos = require('../model')

const getOneTodoController = async (req, res) => {
    const {id} = req.query

    if(!id) return res.status(400) 

    try {
        res.status(200).json(res.todo)
    } catch (err) {
        res.status(400).json({message: 'Bad request'})
    }
}

module.exports = getOneTodoController