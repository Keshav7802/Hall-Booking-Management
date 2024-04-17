import fs from 'fs';
import mongoose from 'mongoose';
import { deleteClub } from '../controllers/club';
import {
    createClub,
    getAllClubs,
    getClubsByName,
    deleteClubByName
} from '../controllers/club';
import ClubModel from '../models/club';

// Mocking the request and response objects
const mockRequest = (body, file, params) => ({
    body,
    file,
    params
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

// Mocking ClubModel methods
jest.mock('../models/club');
const mockClubModelCreate = jest.spyOn(ClubModel, 'create');
const mockClubModelFind = jest.spyOn(ClubModel, 'find');
const mockClubModelFindOne = jest.spyOn(ClubModel, 'findOne');
const mockClubModelFindOneAndDelete = jest.spyOn(ClubModel, 'findOneAndDelete');

// Mocking fs methods
jest.mock('fs');
const mockReadFileSync = jest.spyOn(fs, 'readFileSync');
const mockUnlinkSync = jest.spyOn(fs, 'unlinkSync');

describe('createClub', () => {
    it('should create a new club', async () => {
        const req = mockRequest({
            clubName: 'Test Club',
            description: 'Test description'
        }, {
            path: 'testImagePath'
        });
        const res = mockResponse();

        // Mocking image reading and base64 conversion
        const imageData = 'mockImageData';
        mockReadFileSync.mockReturnValue(imageData);
        const base64Image = Buffer.from(imageData).toString('base64');

        // Mocking ClubModel.create method
        const mockCreatedClub = {
            clubName: req.body.clubName,
            description: req.body.description,
            image: base64Image
        };
        mockClubModelCreate.mockResolvedValue(mockCreatedClub);

        await createClub(req, res);

        expect(mockClubModelCreate).toHaveBeenCalledWith({
            clubName: req.body.clubName,
            description: req.body.description,
            image: 'mockImageData'
        });
        expect(mockUnlinkSync).toHaveBeenCalledWith('testImagePath');
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            success: 1,
            club: mockCreatedClub
        });
    });

    it('should return 400 if required fields are missing', async () => {
        const req = mockRequest({}, {}, {});
        const res = mockResponse();

        await createClub(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            success: 0,
            message: 'Club Name, Description, and Image fields are required.'
        });
    });

    it('should return 400 if Club Name already exists', async () => {
        const req = mockRequest({
            clubName: 'Existing Club',
            description: 'Test description'
        }, {
            path: 'testImagePath'
        });
        const res = mockResponse();

        // Mocking ClubModel.findOne method to return existing club
        mockClubModelFindOne.mockResolvedValue({
            clubName: req.body.clubName
        });

        await createClub(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            success: 0,
            message: 'Club Name already exists.'
        });
    });

    it('should return 400 if an error occurs during creation', async () => {
        const req = mockRequest({
            clubName: 'Test Club',
            description: 'Test description'
        }, {
            path: 'testImagePath'
        });
        const res = mockResponse();

        // Mocking fs readFileSync to throw an error
        mockReadFileSync.mockImplementation(() => {
            throw new Error('File read error');
        });

        await createClub(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            success: 0,
            message: 'Club Name already exists.'
        });
    });
});

describe('getAllClubs', () => {
    it('should get all clubs', async () => {
        const req = mockRequest({}, {}, {});
        const res = mockResponse();

        // Mocking ClubModel.find method to return clubs
        const mockClubs = [{
            clubName: 'Club 1'
        }, {
            clubName: 'Club 2'
        }];
        mockClubModelFind.mockResolvedValue(mockClubs);

        await getAllClubs(req, res);

        expect(res.json).toHaveBeenCalledWith(mockClubs);
    });

    it('should return 404 if no clubs found', async () => {
        const req = mockRequest({}, {}, {});
        const res = mockResponse();

        // Mocking ClubModel.find method to return empty array
        mockClubModelFind.mockResolvedValue([]);

        await getAllClubs(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Clubs not found!'
        });
    });
})