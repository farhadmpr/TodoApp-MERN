const express = require('express')

const app = express()

const todoRoutes = require('./routes/todo-routes')

app.use('/api/todo', todoRoutes)

app.listen(8000)