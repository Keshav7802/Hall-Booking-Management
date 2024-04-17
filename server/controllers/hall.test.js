import mongoose from 'mongoose';
import { createHall, deleteHall, getHall, getAllHalls } from '../controllers/hall';
import HallModel from '../models/hall';

// Mocking the request and response objects
const mockRequest = (body, params) => ({ body, params });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

// Mocking HallModel methods
jest.mock('../models/hall');
const mockHallModelSave = jest.spyOn(HallModel.prototype, 'save');
const mockHallModelFindOne = jest.spyOn(HallModel, 'findOne');
const mockHallModelFind = jest.spyOn(HallModel, 'find');
const mockHallModelFindByIdAndDelete = jest.spyOn(HallModel, 'findByIdAndDelete');

describe('createHall', () => {
    it('should create a new hall', async () => {
        const req = mockRequest({
            hallID: 1,
            hallName: 'Test Hall',
            departmentBlock: 'Test Department',
            hallCapacity: 100
        });
        const res = mockResponse();

        // Mocking HallModel.save method
        const mockSavedHall = { ...req.body, _id: new mongoose.Types.ObjectId() }; // Corrected
        mockHallModelSave.mockResolvedValue(mockSavedHall);

        await createHall(req, res);

        expect(mockHallModelSave).toHaveBeenCalledWith();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockSavedHall);
    });

    it('should handle error during hall creation', async () => {
        const req = mockRequest({
            hallID: 1,
            hallName: 'Test Hall',
            departmentBlock: 'Test Department',
            hallCapacity: 100
        });
        const res = mockResponse();

        // Mocking HallModel.save method to throw an error
        const errorMessage = 'Failed to save hall';
        mockHallModelSave.mockRejectedValue(new Error(errorMessage));

        await createHall(req, res);

        expect(mockHallModelSave).toHaveBeenCalledWith();
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'Failed', message: expect.any(Error)});
    });
});

describe('deleteHall', () => {
    it('should delete a hall', async () => {
        const req = mockRequest({
            hallName: 'Test Hall',
            departmentBlock: 'Test Department'
        });
        const res = mockResponse();

        // Mocking HallModel.findOne and HallModel.findByIdAndDelete methods
        const mockFoundHall = { _id: new mongoose.Types.ObjectId() }; // Corrected
        mockHallModelFindOne.mockResolvedValue(mockFoundHall);
        mockHallModelFindByIdAndDelete.mockResolvedValue('Deleted');

        await deleteHall(req, res);

        expect(mockHallModelFindOne).toHaveBeenCalledWith({ hallName: req.body.hallName, departmentBlock: req.body.departmentBlock });
        expect(mockHallModelFindByIdAndDelete).toHaveBeenCalledWith(mockFoundHall._id);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith('Object has been deleted');
    });

    it('should handle hall not found', async () => {
        const req = mockRequest({
            hallName: 'Nonexistent Hall',
            departmentBlock: 'Nonexistent Block'
        });
        const res = mockResponse();

        // Mocking HallModel.findOne to return null (hall not found)
        mockHallModelFindOne.mockResolvedValue(null);

        await deleteHall(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Hall not found' });
    });
    it('should handle error during hall deletion', async () => {
        const req = mockRequest({
            hallName: 'Test Hall',
            departmentBlock: 'Test Department'
        });
        const res = mockResponse();

        // Mocking HallModel.findOne to return a hall
        const mockFoundHall = { _id: 'mockId' };
        mockHallModelFindOne.mockResolvedValue(mockFoundHall);

        // Mocking HallModel.findByIdAndDelete to throw an error
        const errorMessage = 'Failed to delete hall';
        mockHallModelFindByIdAndDelete.mockRejectedValue(new Error(errorMessage));

        await deleteHall(req, res);

        expect(mockHallModelFindOne).toHaveBeenCalledWith({ hallName: req.body.hallName, departmentBlock: req.body.departmentBlock });
        expect(mockHallModelFindByIdAndDelete).toHaveBeenCalledWith(mockFoundHall._id);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'Failed', message: expect.any(Error) });
    });
});

describe('getHall', () => {
    it('should get a hall by hall ID', async () => {
        const req = mockRequest({}, { id: '123' });
        const res = mockResponse();
        console.log("req.params.id inside test case:", req.params.id); // Add this line

        // Mocking HallModel.find method
        const mockHall = [{ hallID: 123, hallName: 'Test Hall' }];
        mockHallModelFind.mockResolvedValue(mockHall);

        await getHall(req, res);

        expect(mockHallModelFind).toHaveBeenCalledWith({ hallID: req.params.id });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockHall);
    });

    it('should handle error when hall ID is not found', async () => {
        const req = mockRequest({},{ id: '' }); 
        const res = mockResponse();

        await getHall(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'Failed', message: expect.any(Error) });
    });
});

describe('getAllHalls', () => {
    it('should get all halls', async () => {
        const req = mockRequest({});
        const res = mockResponse();

        // Mocking HallModel.find method
        const mockHalls = [{ hallID: 1, hallName: 'Hall 1' }, { hallID: 2, hallName: 'Hall 2' }];
        mockHallModelFind.mockResolvedValue(mockHalls);

        await getAllHalls(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockHalls);
    });

 
});
