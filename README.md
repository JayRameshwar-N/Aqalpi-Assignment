

#  Aqalpi Assignment

This project provides a simple **Event Booking System** with APIs for creating events, booking seats, and listing events/bookings.

---

# Setup Instructions

1. **Clone Repository**
   git clone https://github.com/JayRameshwar-N
   cd Aqalpi-Assignment

 - Required packages install 
 - npm install
 - npm start

***

# API endpoints With Example requests/responses

* Create Event 
Create Event → POST /api/v1/events
- Request Body:
  {
    "name": "Navratri Garba Nights",
    "date": "2026-01-25",
    "totalSeats": 100
  }

- Response:
  {
   "_id": "64f3e7c2a1b2c3d4e5f6",
   "name": "Navratri Garba Nights",
   "date": "2026-01-25",
   "totalSeats": 100
   "remainingSeats": 100
  }


* List Upcoming Events
List Upcoming Events → GET /api/v1/events
- Response:
    [
        {
           "_id": "64f3e7c2a1b2c3d4e5f6",
           "name": "Navratri Garba Nights",
           "date": "2026-01-25",
           "totalSeats": 100
           "remainingSeats": 100
           "__v": 0
        },
        {
            "_id": "68d7ff193c0232619157a3a0",
            "name": "Tesla renomo",
            "date": "2025-10-01T00:00:00.000Z",
            "totalSeats": 40,
            "remainingSeats": 0,
            "__v": 0
        },
    ]


_______ ___oo___ _________

* Book Seats
Book Seats for an Event → POST /api/v1/bookings
- Request Body:
  {
    "event": "68d7ff743c0232619157a3a2",
    "name": "Rameshwar Navthar",
    "seats": 2
}

- Response:
  {
    "event": {
        "_id": "68d7ff743c0232619157a3a2",
        "name": "Aqalpi tech conference",
        "date": "2025-10-04T00:00:00.000Z",
        "totalSeats": 76,
        "remainingSeats": 43,
        "__v": 0
    },
    "name": "Rameshwar Navthar",
    "seats": 2,
    "_id": "68d952ce83829d42b27c5eac",
    "bookedAt": "2025-09-28T15:22:54.844Z",
    "__v": 0
}


* List Bookings
List Bookings for an Event → GET /api/v1/bookings/:eventId
- Response:
  {
    "Bookings": [
        {
            "_id": "68d8d1dc29cf20560fb46845",
            "event": "68d7ff743c0232619157a3a2",
            "name": "Chetana",
            "seats": 10,
            "bookedAt": "2025-09-28T06:12:44.146Z",
            "__v": 0
        },
        {
            "_id": "68d8d1f24e2fd6ecd2b1fbb0",
            "event": "68d7ff743c0232619157a3a2",
            "name": "Rameshwar",
            "seats": 2,
            "bookedAt": "2025-09-28T06:13:06.623Z",
            "__v": 0
        },
        {
            "_id": "68d8d4f798cf43ad9d457412",
            "event": "68d7ff743c0232619157a3a2",
            "name": "Rai",
            "seats": 4,
            "bookedAt": "2025-09-28T06:25:59.071Z",
            "__v": 0
        },
    ]
}






