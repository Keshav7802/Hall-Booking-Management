import EventModel from "./../models/event.js";

// Function to calculate the duration between two dates
const calculateDuration = (startDateTime, endDateTime) => {
    const duration = endDateTime.getTime() - startDateTime.getTime();
    return Math.floor(duration / (1000 * 60)); // Convert milliseconds to minutes
};

// Endpoint to create an event
export const createEvent = async(req, res) => {
    try {
        const { eventName, eventType, eventPurpose, startDateTime, endDateTime, ticketBooking, ticketID, clubID, multipleHallsNeeded } = req.body;

        // Check if all required fields are present
        if (!eventName || !eventType || !eventPurpose || !startDateTime || !endDateTime || ticketBooking === undefined || clubID === undefined || multipleHallsNeeded === undefined) {
            return res.status(400).json({ success: false, message: 'Missing required fields in the request body.' });
        }

        // Check if an event with the same eventName already exists
        const existingEvent = await EventModel.findOne({ eventName });
        if (existingEvent) {
            return res.status(400).json({ success: false, message: 'An event with the same name already exists.' });
        }

        // Calculate duration
        const eventDuration = calculateDuration(new Date(startDateTime), new Date(endDateTime));

        // Check if ticketBooking is true and ensure ticketID is provided
        const validatedTicketID = ticketBooking ? ticketID : null;

        const event = await EventModel.create({
            eventName,
            eventType,
            eventPurpose,
            startDateTime,
            endDateTime,
            eventDuration,
            ticketBooking,
            ticketID: validatedTicketID,
            clubID,
            multipleHallsNeeded
        });

        res.status(201).json({ success: true, event });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Error creating event, try again.' });
    }
};


// Endpoint to delete an event
export const deleteEvent = async(req, res) => {
    try {

        const { eventID } = req.params;
        if (!eventID) {
            return res.status(400).json({ success: false, message: 'Event Id required.' });
        }
        await EventModel.deleteOne({ _id: eventID });

        res.status(200).json({ success: true, message: 'Event deleted successfully.' });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Error deleting event, try again.' });
    }
};


// GET event by ID 
export const getEventbyID = async(req, res) => {
    try {
        const eventID = req.params.id;
        if (!eventID) throw error("Event not found");
        const event = await EventModel.find({eventID});
    
        res.status(200).json(event);
      } catch (err) {
        res.status(400).json({
          status: "Failed",
          message: err,
        });
      }
};

// GET all events
export const getAllEvents = async(req, res) => {
    try {
        const events = await EventModel.find();
        if (!events.length) {
            res.status(404).json({ message: 'Events not found!' });
        } else {
            res.json(events);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};