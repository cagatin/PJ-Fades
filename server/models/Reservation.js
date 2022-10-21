const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
    // Type of Service being reserved for
    type: {
        type: String,
        required: True
    },
    // Comments made by the User
    comments: [
        {
            commentText: {
                type: String,
                minlength: 1,
                maxLength: 280
            },
        }
    ],
    // Price of the service
    price: {
        type: Number,
        required: true
    },
    // Date selected for the Service
    date: {
        type: Date,
        requried: true
    },
    // Person who created the reservation
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Reservation = model('Reservation', reservationSchema);
module.exports = Reservation;