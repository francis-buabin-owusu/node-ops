const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./router')

const app = express()
const port =  3000

app.use(cors())
app.use(express.json())
app.use('/api', routes)

mongoose.connect(`mongodb+srv://codingdrizzle:devopstry@todoapi.zb7jtva.mongodb.net/?retryWrites=true&w=majority` || process.env.DATABASE_URL)
    .then(() => console.log('connected to db'))
    .catch((e) => console.error(e))


app.listen(port, () => { console.log(`server has started at port ${port}`) })