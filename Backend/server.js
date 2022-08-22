
//  Created variables for the environments needed to run this the node app

const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

// This app Directs Root path "/"===="/api/goals" to this file folder location
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => {
    console.log(`Server Started on ${port} `);
});