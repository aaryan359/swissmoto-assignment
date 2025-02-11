const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const DBconnect = require('./config/db_connect');

env.config();


// made a express app from express
const app = express();



//middleware to enable json data type and cors policy
app.use(cors());
app.use(express.json());


//calling db connect functions
DBconnect();









// listing on port
app.listen(process.env.PORT,()=>{
    console.log(`server is listing on port ${process.env.PORT}`);

})