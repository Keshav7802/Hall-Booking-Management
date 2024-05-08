import mongoose from 'mongoose';
import { createBooking, updateBooking, getAllBookings } from './booking';
import BookingModel from '../models/booking';

// Mocking the request and response objects
const mockRequest = (body) => ({
  body,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

// Mocking mongoose.Types.ObjectId.isValid
mongoose.Types.ObjectId.isValid = jest.fn().mockReturnValue(true);

// Mocking BookingModel.create
BookingModel.create = jest.fn();

// Mocking BookingModel.findByIdAndUpdate
BookingModel.findByIdAndUpdate = jest.fn();

// Mocking BookingModel.find
BookingModel.find = jest.fn();

describe('createBooking', () => {
  it('should create a new booking', async () => {
    const req = mockRequest({
      userID: 'user123',
      eventName: 'Event Test',
      eventType: 'Corporate',
      hallName: 'Hall A',
      departmentBlock: 'A',
      clubName: 'Club X',
      startDateTime: new Date(),
      endDateTime: new Date(),
      eventDuration: 2,
      eventPurpose: 'Networking',
      bookingStatus: 'Pending',
      bookingDateTime: new Date(),
    });
    const res = mockResponse();

    BookingModel.create.mockResolvedValue(req.body);

    await createBooking(req, res);

    expect(BookingModel.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
  it('should return 400 if createBooking fails', async () => {
    const req = mockRequest({
      // Provide valid request body
    });
    const res = mockResponse();
  
    const errorMessage = 'Error occurred while creating booking';
    BookingModel.create.mockRejectedValue(new Error(errorMessage));
  
    await createBooking(req, res);
  
    expect(BookingModel.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 'Failed',
      message: expect.any(Error),
    });
});
});

describe('updateBooking', () => {
  it('should update an existing booking', async () => {
    const req = mockRequest({
      id: '123',
      bookingStatus: 'Approved',
      approvalDateTime: new Date(),
    });
    const res = mockResponse();

    BookingModel.findByIdAndUpdate.mockResolvedValue(req.body);

    await updateBooking(req, res);

    expect(BookingModel.findByIdAndUpdate).toHaveBeenCalledWith(
      req.body.id,
      { bookingStatus: req.body.bookingStatus, approvalDateTime: req.body.approvalDateTime },
      { new: true }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  it('should return 500 if updateBooking fails', async () => {
    const req = mockRequest({
      // Provide valid request body
    });
    const res = mockResponse();
  
    const errorMessage = 'Error occurred while updating booking';
    BookingModel.findByIdAndUpdate.mockRejectedValue(new Error(errorMessage));
  
    await updateBooking(req, res);
  
    expect(BookingModel.findByIdAndUpdate).toHaveBeenCalledWith(
      req.body.id,
      { bookingStatus: req.body.bookingStatus, approvalDateTime: req.body.approvalDateTime },
      { new: true }
    );
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      status: 'Failed',
      error : errorMessage,
      message: 'An error occurred while updating the booking',
    });
  });
});

describe('getAllBookings', () => {
  it('should get all bookings with specific bookingStatus', async () => {
    const req = mockRequest({});
    const res = mockResponse();

    const mockBookings = [
      { eventName: 'Event 1', bookingStatus: 'Pending' },
      { eventName: 'Event 2', bookingStatus: 'Approved' },
      // Add more mock bookings as needed
    ];

    BookingModel.find.mockResolvedValue(mockBookings);

    await getAllBookings(req, res);

    expect(BookingModel.find).toHaveBeenCalledWith({
      bookingStatus: { $in: ['Pending', 'Approved', 'Rejected'] },
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockBookings);
  });

  it('should return 400 if an error occurs during retrieval', async () => {
    const req = mockRequest({});
    const res = mockResponse();

    const errorMessage = 'Error occurred while fetching bookings';
    BookingModel.find.mockRejectedValue(new Error(errorMessage));

    await getAllBookings(req, res);

    expect(BookingModel.find).toHaveBeenCalledWith({
      bookingStatus: { $in: ['Pending', 'Approved', 'Rejected'] },
    });
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: 'Failed',
      message: expect.any(Error),
    });
  });
});