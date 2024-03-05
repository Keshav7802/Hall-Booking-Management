// Import necessary modules and the EventModel
import mongoose from 'mongoose';
import EventModel from './event';

// Define a describe block for the EventModel
describe('EventModel', () => {
  // Define a test case for testing the schema definition
  it('should define a valid schema', () => {
    // Create a sample event object
    const sampleEvent = {
      eventID: 1,
      eventName: 'Sample Event',
      eventType: 'Conference',
      clubID: 123,
      eventPurpose: 'This is a sample event purpose.',
      startDateTime: new Date(),
      endDateTime: new Date(),
      eventDuration: 2,
      ticketBooking: true,
      ticketID: 456,
    };

    // Create a new instance of the EventModel with the sample data
    const event = new EventModel(sampleEvent);

    // Validate that the event object conforms to the schema
    expect(event.validateSync()).toBeUndefined();
  });
});
