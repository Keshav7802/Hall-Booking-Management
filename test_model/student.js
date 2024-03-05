import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  studentID: Number,
  userID: Number,
  entryNumber: String,
  email: String,
});

const StudentModel = mongoose.model('StudentModel',studentSchema);
export default StudentModel;