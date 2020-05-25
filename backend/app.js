const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const todoRoutes = require('./routes/todo-routes')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next()
})

app.use('/api/todo', todoRoutes)

mongoose
    .connect('mongodb://mongo:27017/todo')
    .then(() => {
        app.listen(8000)
    })
    .catch(err => {
        console.log(err)
    })