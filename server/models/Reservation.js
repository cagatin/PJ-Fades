const { UniqueOperationTypesRule } = require('graphql');
const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
    // Type of Service being reserved for
    type: {
        type: String,
    },
    // Comments made by the User
    comments: {
        type: String,
        minlength: 1,
        maxLength: 280
    },
    // Time Selected of the service
    time: {
        type: String,
    },
    // Date selected for the Service
    date: {
        type: String,
    },
    // Person who created the reservation
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // Is the reservation approved by the Admin?
    isApproved: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Reservation = model('Reservation', reservationSchema);
module.exports = Reservation;