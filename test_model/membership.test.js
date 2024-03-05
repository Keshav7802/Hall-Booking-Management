// Import necessary modules and the MembershipModel
import mongoose from 'mongoose';
import MembershipModel from './membership';

// Define a describe block for the MembershipModel
describe('MembershipModel', () => {
  // Define a test case for testing the schema definition
  it('should define a valid schema', () => {
    // Create a sample membership object
    const sampleMembership = {
      membershipID: 1,
      userID: 123,
      clubID: 'hashedClubID',
      positionOfResponsibility: 'Coordinator',
    };

    // Create a new instance of the MembershipModel with the sample data
    const membership = new MembershipModel(sampleMembership);

    // Validate that the membership object conforms to the schema
    expect(membership.validateSync()).toBeUndefined();
  });

  // Define a test case for testing valid enum values for positionOfResponsibility
  it('should accept valid enum values for positionOfResponsibility', () => {
    // Create a sample membership object with a valid positionOfResponsibility
    const validMembership = {
      membershipID: 1,
      userID: 123,
      clubID: 'hashedClubID',
      positionOfResponsibility: 'Coordinator', // A valid enum value
    };

    // Create a new instance of the MembershipModel with the valid data
    const membership = new MembershipModel(validMembership);

    // Validate that the membership object passes schema validation
    expect(membership.validateSync()).toBeUndefined();
  });

  // Define a test case for testing invalid enum values for positionOfResponsibility
  it('should reject invalid enum values for positionOfResponsibility', () => {
    // Create a sample membership object with an invalid positionOfResponsibility
    const invalidMembership = {
      membershipID: 1,
      userID: 123,
      clubID: 'hashedClubID',
     positionOfResponsibility: 'InvalidPosition', // An invalid enum value
    };

    // Create a new instance of the MembershipModel with the invalid data
    const membership = new MembershipModel(invalidMembership);

    // Validate that the membership object fails schema validation
    expect(membership.validateSync()).toBeDefined();
  });
});
