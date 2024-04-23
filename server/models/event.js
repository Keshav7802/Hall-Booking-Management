import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
  // eventID: Number,
  eventName: String,
  eventType: String,
  // clubID: Number,
  clubName: String,
  eventPurpose: String,
  startDateTime: Date,
  endDateTime: Date,
  eventDuration: Number,
  // ticketBooking: Boolean,
  // ticketID: Number,
});

const EventModel = mongoose.model('EventModel', eventSchema);
export default EventModel;