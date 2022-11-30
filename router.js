const express = require('express')
const Todos = require('./model')

const getID = require('./middleware')
const getAllTodosConteroller = require('./controllers/getAllTodosController')
const getOneTodoController = require('./controllers/getOneTodoController')
const postTodoController = require('./controllers/postTodoController')
const editTodoController = require('./controllers/editTodoController')
const deleteTodoController = require('./controllers/deleteTodoController')

const router = express.Router() 

router.get('/todos', getAllTodosConteroller)
router.get('/todos/:id', getOneTodoController)
router.post('/todos', postTodoController)
router.patch('/todos/:id', getID, editTodoController)
router.delete('/todos/:id', getID, deleteTodoController)

module.exports = router