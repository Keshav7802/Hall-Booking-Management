import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
  ticketID: String,
  ticketPrice: Number,
  totalTickets: Number,
});

const TicketModel = mongoose.model('TicketModel',ticketSchema);
export default TicketModel;