const getID = async (req, res, next) => {
    try {
        if(!req.params.id) return res.status(400).json({message: 'Id not found'})

        req.todoID = req.params.id
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    next()
}

module.exports = getID