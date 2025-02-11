const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({

    adminname:{
        type:String,
        required:true,
    },

    adminemail:{
        type:String,
        required:[true,'email is required'],
        unique:true,
    },

    adminpassword:{
        type:String,
        require:[true,'password is required'],
        unique:true
    },
    events:{
        type:mongoose.Types.ObjectId,
        ref:'Event'
    }
    

},{timestamps:true});

const Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;