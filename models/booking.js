import mongoose from 'mongoose';
const {Schema} = mongoose;

const bookingSchema = new Schema({
  bookingID: Number,
  userID: Number,
  eventID: Number,
  bookingStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected', 'Updated'] },
  bookingDateTime: Date,
  approvalDateTime: Date,
  hallIDs: [{ type: Number }],
});

const BookingModel = mongoose.model('BookingModel', bookingSchema);
export default BookingModel;