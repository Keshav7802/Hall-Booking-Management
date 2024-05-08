import fs from 'fs';
import mongoose from 'mongoose';
import { createEvent, deleteEvent, getAllEvents } from '../controllers/event';
import EventModel from '../models/event';

// Mocking the request and response objects
const mockRequest = (body, params) => ({ body, params });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

// Mocking EventModel methods
jest.mock('../models/event');
const mockEventModelCreate = jest.spyOn(EventModel, 'create');
const mockEventModelDeleteOne = jest.spyOn(EventModel, 'deleteOne');
const mockEventModelFind = jest.spyOn(EventModel, 'find');

describe('createEvent', () => {
    it('should create a new event', async () => {
        const req = mockRequest({
            eventName: 'Test Event',
            eventType: 'Test Type',
            eventPurpose: 'Test Purpose',
            startDateTime: new Date(),
            endDateTime: new Date(),
            clubName: 'Test Club'
        });
        const res = mockResponse();

        // Mocking EventModel.create method
        const mockCreatedEvent = { eventName: req.body.eventName };
        mockEventModelCreate.mockResolvedValue(mockCreatedEvent);

        await createEvent(req, res);

        expect(mockEventModelCreate).toHaveBeenCalledWith({
            clubName: req.clubName,
            eventName: req.body.eventName,
            eventType: req.body.eventType,
            eventPurpose: req.body.eventPurpose,
            startDateTime: req.body.startDateTime,
            endDateTime: req.body.endDateTime,
            eventDuration: 0
        });
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ success: true, event: mockCreatedEvent, ok: true });
    });

    it('should return a 400 status code and error message if any required field is missing', async () => {
        const req = mockRequest({
            // Missing some required fields
        });
        const res = mockResponse();

        await createEvent(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Missing required fields in the request body.' });
    });
    it('should return a 400 status code and error message if an event with the same name already exists', async () => {
        const req = mockRequest({
            eventName: 'Existing Event', // Assuming this event name already exists
            eventType: 'Type A',
            eventPurpose: 'Purpose A',
            startDateTime: '2024-04-17T08:00:00Z',
            endDateTime: '2024-04-17T10:00:00Z',
            clubName: 'Test Club'
        });
        const res = mockResponse();

        // Mocking the EventModel.findOne method to return a non-null value
        EventModel.findOne.mockResolvedValue({ eventName: req.body.eventName });

        await createEvent(req, res);

        expect(EventModel.findOne).toHaveBeenCalledWith({ eventName: req.body.eventName });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ success: false, message: 'An event with the same name already exists.' });
    });
});

describe('deleteEvent', () => {
    it('should delete an event', async () => {
        const req = mockRequest({}, { eventID: '123' }); // Correctly passing the eventID in params
        const res = mockResponse();

        await deleteEvent(req, res);

        expect(mockEventModelDeleteOne).toHaveBeenCalledWith({ _id: req.params.eventID });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Event deleted successfully.' });
    });

    it('should return a 400 status code and error message if eventID is missing', async () => {
        const req = mockRequest({}, {}); // Missing eventID
        const res = mockResponse();

        await deleteEvent(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Event Id required.' });
    });

    it('should return a 400 status code and error message if there is an error deleting event', async () => {
        const req = mockRequest({}, { eventID: '123' });
        const res = mockResponse();

        // Mocking EventModel.deleteOne method to throw an error
        mockEventModelDeleteOne.mockRejectedValue(new Error('Delete error'));

        await deleteEvent(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Error deleting event, try again.' });
    });
});

describe('getAllEvents', () => {
    it('should get all events', async () => {
        const req = mockRequest({});
        const res = mockResponse();

        // Mocking EventModel.find method to return events
        const mockEvents = [{ eventName: 'Event 1' }, { eventName: 'Event 2' }];
        mockEventModelFind.mockResolvedValue(mockEvents);

        await getAllEvents(req, res);

        expect(res.json).toHaveBeenCalledWith(mockEvents);
    });

    it('should return 404 if no events found', async () => {
        const req = mockRequest({});
        const res = mockResponse();

        // Mocking EventModel.find method to return empty array
        mockEventModelFind.mockResolvedValue([]);

        await getAllEvents(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Events not found!' });
    });

    // Add more test cases for getAllEvents as needed
});