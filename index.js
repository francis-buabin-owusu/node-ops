const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./router')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use('/api', routes)

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://codingdrizzle:gateway_api${user}@todolist.vczak00.mongodb.net/todoList')
    .then(() => console.log('connected to db'))
    .catch((e) => console.error(e))


app.listen(port, () => { console.log(`server has started at port ${port}`) })