const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'})

require('./db/conn');

const PORT = process.env.PORT;





//Middleware
const middleware = (req, res, next) => {
    console.log('Hello Middleware')
    next();
}

app.get('/', (req, res) => {
    res.send(`Home`);
});

app.get('/about', middleware,(req, res) => {
    res.send(`about`);
});

app.get('/login', (req, res) => {
    res.send(`login`);
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
})