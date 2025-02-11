const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({

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
        required: [true, 'Event ID is required']
    },

    status: {
        type: String,
        enum: ['Attending', 'Interested', 'Not Attending'],
        default: 'Interested'
    },

    // Optional: You can store the ticket number or a QR code for the attendee
    ticketNumber: {
        type: String,
        unique: true,
        default: function () {
            return `TICKET-${Math.floor(Math.random() * 1000000)}`;
        }
    }

}, {timestamps: true});

const Attendee = mongoose.model('Attendee', AttendeeSchema);
module.exports = Attendee;
