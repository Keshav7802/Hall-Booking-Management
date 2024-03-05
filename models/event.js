import mongoose from 'mongoose';
const {Schema} = mongoose;


const eventSchema = new Schema({
  eventID: Number,
  eventName: String,
  eventType: String,
  clubID: Number,
  eventPurpose: String,
  startDateTime: Date,
  endDateTime: Date,
  eventDuration: Number,
  ticketBooking: Boolean,
  ticketID: Number,
});

const EventModel = mongoose.model('EventModel', eventSchema);
export default EventModel;