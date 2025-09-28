const eventModel = require("../models/Event.model");
const catchAsync = require("../utils/catchAsync");



exports.createEvent = catchAsync( async(req,res)=> {

     const { name, date, totalSeats } = req.body;

     const event = await eventModel.create({
        name,
        date,
        totalSeats,
        remainingSeats: totalSeats
        });
     
     res.status(201).send({
        Success:true,
        Event:event
        }); 

})


/////

exports.getEvent = catchAsync( async(req,res)=> {

     const event = await eventModel.find({
        date:{$gte: new Date() } 
        })

     res.send({
        Success: true,
        UpcomingEvents: event
        })
})
