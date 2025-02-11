const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const DBconnect = async()=>{

    //database connections
     await mongoose.connect(process.env.MONGO_DB);

     console.log(`db is connected `);
   
}

module.exports = DBconnect;
