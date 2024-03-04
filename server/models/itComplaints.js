import mongoose from 'mongoose';

const itComplaintsSchema = mongoose.Schema({
  complaintID: Number,
  bookingID: Number,
  hallID: Number,
  complaintNote: String,
});

const ItComplaintsModel = mongoose.model('ItComplaintsModel',itComplaintsSchema);
export default ItComplaintsModel;