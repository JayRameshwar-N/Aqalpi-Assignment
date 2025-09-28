const mongoose = require("mongoose");

const eventShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  totalSeats: {
    type: Number,
    required: true,
  },

  remainingSeats: {
    type: Number,
    required: true,
  },
}); 


module.exports= mongoose.model('event', eventShema)



