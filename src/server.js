'use strict'

const express = require('express');
const cors = require('cors');
const pageNotFound = require('./error-handlers/404')
const serverError = require('./error-handlers/500')
const foodRouter = require('./routes/ food')
const clothesRouter = require('./routes/clothes')
const booksRouter = require('./routes/books')
const authorsRouter = require('./routes/authors')


const app = express();
app.use(cors());
app.use(express.json())
app.get('/', homehandler)
app.use(foodRouter)
app.use(clothesRouter)
app.use(booksRouter)
app.use(authorsRouter)



app.use(serverError)
app.use('*', pageNotFound)

function homehandler(req, res){
res.status(200).json({
code: 200,
message: 'Welcome to the home page'
})
}


function start (port){
    app.listen(port, ()=> console.log(`Up and running on port: ${port}`))
}

module.exports = {
    start,
    app
}


/* 
The code sets up an Express server with CORS enabled and JSON parsing middleware. 
It imports two router modules for handling food and clothes routes. 
It includes a basic route for the home page. 
The start function starts the server on a specified port. 
The app object is exported for external use. 
Additional implementation is required for error handling, route logic, and database integration.*/