const express = require('express');
const app = express();

const ratelimit = require("express-rate-limit")
const ErrorHandler = require('./src/middlwares/ErrorHandler')

app.use(express.json());



//
const limite = ratelimit.rateLimit({
    windowMs: 1 * 60 * 1000,
    max:3,
    message: 'Too many request from this site, please try again later!'
})

app.use(limite)




//
const Event = require('./src/routes/event.route')
const Booking = require('./src/routes/booking.route')


app.use('/api/v1/events', Event)
app.use('/api/v1/bookings', Booking)

app.use((req, res) => {
  res.status(404).send("Invalid Path, Please check and try again!");
});


//
app.use(ErrorHandler)





module.exports = app;


