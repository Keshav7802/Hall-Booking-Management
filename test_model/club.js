import mongoose from 'mongoose';
const {Schema} = mongoose;

const clubSchema = new Schema({
  clubID: Number,
  clubName: String,
  description: String,
});

const ClubModel = mongoose.model('ClubModel', clubSchema);
export default  ClubModel;
