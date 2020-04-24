const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const todoRoutes = require('./routes/todo-routes')

app.use(bodyParser.json())

app.use('/api/todo', todoRoutes)

app.listen(8000)