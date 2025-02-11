const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Event title is required']
    },

    description: {
        type: String,
        required: [true, 'Event description is required']
    },

    date: {
        type: Date,
        required: [true, 'Event date is required']
    },

    time: {
        type: String,
        required: [true, 'Event time is required']
    },

    location: {
        type: String,
        required: [true, 'Event location is required']
    },

    attendees: {
        type: Number,
        default: 0,
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Admin',
        required: true,
    },

    image: {
        type: String,  
        default: null,
    },

    category: {
        type: String,
        enum: ['Conference', 'Workshop', 'Seminar', 'Meetup', 'Others'],
        default: 'Others'
    }

}, {timestamps: true});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
