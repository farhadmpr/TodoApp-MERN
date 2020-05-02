const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const todoRoutes = require('./routes/todo-routes')

app.use(bodyParser.json())

app.use('/api/todo', todoRoutes)

mongoose
    .connect('mongodb://127.0.0.1:27017/todo')
    .then(() => {
        app.listen(8000)
    })
    .catch(err => {
        console.log(err)
    })