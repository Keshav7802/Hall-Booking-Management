import mongoose from 'mongoose';
const {Schema} = mongoose;

const hallSchema = mongoose.Schema({
  hallID: Number,
  hallName: String,
  departmentBlock: String,
  hallCapacity: Number,
});

const HallModel = mongoose.model('HallModel',hallSchema);
export default HallModel;