import mongoose from 'mongoose';

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

const eventModel = mongoose.model('Event', eventSchema);
export default EventModel;