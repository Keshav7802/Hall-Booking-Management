import mongoose from 'mongoose';

const sessionSchema = mongoose.Schema({
  sessionID: String,
  userID: String,
  token: String,
  expirationTime: Date,
});

const SessionModel = mongoose.model('SessionModel',sessionSchema);
export default SessionModel;