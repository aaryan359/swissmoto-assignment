const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Attendee name is required']
    },

    email: {
        type: String,
        required: [true, 'Attendee email is required'],
        unique: true,
        match: [/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/, 'Please fill a valid email address']
    },

    password:{
        type:String,
        required:true

    },
    phone: {
        type: String,
        required: false, 
    },

    registeredAt: {
        type: Date,
        default: Date.now
    },

    event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event', 
    },
    


}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;
