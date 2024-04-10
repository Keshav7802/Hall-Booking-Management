import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
  //bookingID: Number,
  userID: String,
  eventName: String,
  bookingStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected', 'Updated'] },
  bookingDateTime: Date,
  approvalDateTime: Date,
  hallIDs: [{ type: Number }],
});

const BookingModel = mongoose.model('BookingModel', bookingSchema);
export default BookingModel;