import mongoose from 'mongoose';

const ticketBookingSchema = mongoose.Schema({
    ticketBookingID: Number,
    studentID: Number,
    ticketID: Number, //This would be hashed
    bookingDateTime: Date,
});

const TicketBookingModel = mongoose.model('TicketBookingModel',ticketBookingSchema);
export default TicketBookingModel;
