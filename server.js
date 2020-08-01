

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');

const { animals } = require('./data/animals.json');
const express = require('express');
const PORT = process.env.PORT || 3001;
//parse incoming string or array data
const app = express();
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());
//grab or route html/css aka middleware the express.static() method
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



app.listen(PORT,() => {
    console.log(`API server now on port ${PORT}!`)
});






