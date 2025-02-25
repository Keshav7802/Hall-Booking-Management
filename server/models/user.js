import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String, //This would be hashed
    userType: { type: String, enum: ['Student', 'Faculty', 'Administration', 'IT Staff'] },
});

const UserModel = mongoose.model('UserModel',userSchema);
export default UserModel;
