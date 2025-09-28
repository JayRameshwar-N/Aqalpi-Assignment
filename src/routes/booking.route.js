const route = require('express').Router();

const {
    createBooking,
    getBookings

}= require('../controllers/bookingController')



route.post('/' , createBooking);
route.get('/:eventId' , getBookings);




module.exports = route;