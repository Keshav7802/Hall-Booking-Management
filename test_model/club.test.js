// Import necessary modules and the ClubModel
import mongoose from 'mongoose';
import ClubModel from './club';

// Define a describe block for the ClubModel
describe('ClubModel', () => {
  // Define a test case for testing the schema definition
  it('should define a valid schema', () => {
    // Create a sample club object
    const sampleClub = {
      clubID: 1,
      clubName: 'Sample Club',
      description: 'This is a sample club description.',
    };

    // Create a new instance of the ClubModel with the sample data
    const club = new ClubModel(sampleClub);

    // Validate that the club object conforms to the schema
    expect(club.validateSync()).toBeUndefined();
  });
});
