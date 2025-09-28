const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    event: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'event', 
        required: true 
    },

    name: { 
        type: String, 
        required: true 
    },

    seats: { 
        type: Number, 
        required: true 
    },

    bookedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Booking', bookingSchema);
