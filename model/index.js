const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            required: true,
            default: false
        }
    }

)

module.exports = mongoose.model('todos', todoSchema)