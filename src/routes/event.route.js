const route = require("express").Router();

const {
    createEvent,
    getEvent

}= require("../controllers/eventController");



route
.route("/")
.post(createEvent)
.get(getEvent)



module.exports = route; 