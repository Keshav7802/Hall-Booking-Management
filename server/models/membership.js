import mongoose from 'mongoose';

const membershipSchema = mongoose.Schema({
    membershipID: String,
    userID: String,
    clubID: String, //This would be hashed
    positionOfResponsibility: { type: String, enum: ['Coordinator', 'Representative', 'Member', 'TA', 'Faculty'] },
});

const MembershipModel = mongoose.model('MembershipModel',membershipSchema);
export default MembershipModel;
