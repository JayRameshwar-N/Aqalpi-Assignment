const catchAsync = require("../utils/catchAsync");
const EventMode = require("../models/Event.model");
const BookingModel = require("../models/Booking.model");




//
exports.createBooking = catchAsync( async(req,res)=> {

    const { event, name, seats } = req.body;

        const Events = await EventMode.findById(event);
        if (!Events) return res.status(404).json({ error: 'Event not found' });

       if (Events.date.getTime() < Date.now()) 
           return res.status(400).json({ error: 'Cannot book past Events' });
            
        if (seats > Events.remainingSeats)
            return res.status(400).json({ error: 'Not enough seats available' });

        const booking = await BookingModel.create({ event: Events, name, seats });

        Events.remainingSeats -= seats;
        await Events.save();

        res.status(201).json(booking);

        })



//
exports.getBookings = catchAsync( async(req,res)=> {

    const {eventId} = req.params;
    
    const bookings = await BookingModel.find({event:eventId})
    
    res.status(200).send({
        Success: true,
        Bookings: bookings
    })

})