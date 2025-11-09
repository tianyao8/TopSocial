//npm init
//npm i express json-server cors axios 
//npm i nodemon concurrently -D //install nodemon and concurrently as dev dependencies
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const { handleErrors } = require('./middleware/errorMiddleware');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use('/api',router);

//use error middleware at the end
app.use(handleErrors)
const PORT = 80;
app.listen(PORT, function() {
    console.log(`TopSocial Backend Server is running on http://localhost:80`);
});