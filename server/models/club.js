import mongoose from 'mongoose';

const clubSchema = mongoose.Schema({
  clubID: Number,
  clubName: String,
  description: String,
});

const ClubModel = mongoose.model('ClubModel', clubSchema);
export default  ClubModel;
