const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const DBconnect = require('./config/db_connect');
const authRoutes = require('./routes/user_routes/authRoutes');


env.config();


// made a express app from express
const app = express();



//middleware to enable json data type and cors policy
app.use(cors());
app.use(express.json());


//calling db connect functions
DBconnect();

//signup route
app.use('/api/user',authRoutes);








// listing on port
app.listen(process.env.PORT,()=>{
    console.log(`server is listing on port ${process.env.PORT}`);

})