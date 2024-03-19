import fs from 'fs';
import ClubModel from "./../models/club.js";

// Create a Club
export const createClub = async(req, res) => {
    try {
        const { clubName, description } = req.body;
        const image = req.file;
        if (!clubName || !description || !image) {
            return res.status(400).json({ success: 0, message: 'Club Name, Description, and Image fields are required.' });
        }
        const existingClub = await ClubModel.findOne({ clubName });
        if (existingClub) {
            return res.status(400).json({ success: 0, message: 'Club Name already exists.' });
        }
        const imageData = fs.readFileSync(image.path);
        const base64Image = imageData.toString('base64');
        const club = await ClubModel.create({ clubName, description, image: base64Image });
        fs.unlinkSync(image.path);
        res.status(201).json({ success: 1, club });
    } catch (error) {
        res.status(400).json({ success: 0, message: 'Error creating club, try again.' });
    }
};

// Get all Clubs
export const getAllClubs = async(req, res) => {
    try {
        const clubs = await ClubModel.find();
        if (!clubs.length) {
            res.status(404).json({ message: 'Clubs not found!' });
        } else {
            res.json(clubs);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get Club By Name
export const getClubsByName = async(req, res) => {
    try {
        const { clubName } = req.params;
        const club = await ClubModel.findOne({ clubName });
        if (club) {
            res.json(club);
        } else {
            res.status(404).json({ message: 'Club not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete Club by name
export const deleteClubByName = async(req, res) => {
    try {
        const { clubName } = req.params;
        const club = await ClubModel.findOneAndDelete({ clubName });
        if (club) {
            res.json({ message: 'Club deleted successfully' });
        } else {
            res.status(404).json({ message: 'Club not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};