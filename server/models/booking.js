import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
  userID: String,
  eventName: String,
  eventType: String,
  hallName: String,
  departmentBlock: String,
  clubName: String,
  startDateTime: Date,
  endDateTime: Date,
  eventDuration: Number,
  eventPurpose: String,
  bookingStatus: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
  },
  bookingDateTime: Date,
  approvalDateTime: Date,
});

const BookingModel = mongoose.model('BookingModel', bookingSchema);
export default BookingModel;