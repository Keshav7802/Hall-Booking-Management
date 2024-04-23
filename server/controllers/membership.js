import MembershipModel from "../models/membership.js";

const createMembership = async(req, res) => {
    try {
        const { userID, clubID, positionOfResponsibility } = req.body;

        // Check if all required fields are present
        if (!userID || !clubID || !positionOfResponsibility || userID === undefined || positionOfResponsibility === undefined || clubID === undefined) {
            return res.status(400).json({ success: false, message: 'Missing required fields in the request body.' });
        }

        // Find existing membership or create new one
        let membership = await MembershipModel.findOne({ userID, clubID });

        if (!membership) {
            membership = new MembershipModel({
                userID,
                clubID,
                positionOfResponsibility
            });
        } else {
            membership.positionOfResponsibility = positionOfResponsibility;
        }

        // Save the membership
        await membership.save();

        // Respond with success message
        res.status(201).json({ success: true, message: "Membership created/updated successfully." });
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(500).json({ success: false, message: 'Error while adding membership, try again.' });
    }
};



const deleteMembership = async(req, res) => {
    try {
        const { userID, clubID } = req.body;
        if (!userID || !clubID || clubID === undefined || userID === undefined) {
            return res.status(400).json({ success: false, message: 'User Id and Club Id required.' });
        }
        await MembershipModel.findOneAndDelete({ userID, clubID });
        res.status(201).json({ success: true, message: "Membership deleted successfully." });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Error while deleting membership, try again.' });
    }
}

export { deleteMembership, createMembership }