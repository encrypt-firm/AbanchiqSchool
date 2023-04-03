
//  Created variables for the environments needed to run this the node app

const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const{errorHandler} = require('./middleware/errorMiddleware')
const connectDataBase = require('./config/database')


connectDataBase()



const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// This app Directs Root path "/"===="/api/goals" to this file folder location
app.use('/api/goals', require('./routes/goalRoutes'))

// This app Directs Root path "/"===="/api/User" to this file folder location
app.use('/api/user', require('./routes/userRoutes'))


// Error Handler
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server Started on ${port} `);
});