import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signin, signup } from '../controllers/users';
import UserModel from '../models/user';

// Mocking the request and response objects
const mockRequest = (body) => ({ body });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

// Mocking UserModel methods
jest.mock('../models/user');
const mockUserModelFindOne = jest.spyOn(UserModel, 'findOne');
const mockUserModelCreate = jest.spyOn(UserModel, 'create');


jest.mock('bcryptjs');
const mockBcryptHash = bcrypt.hash;

jest.mock('jsonwebtoken');
const mockJwtSign = jwt.sign;


// Mocking bcrypt.compare and jwt.sign
jest.mock('bcryptjs');
const mockBcryptCompare = bcrypt.compare;


describe('signin', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should sign in an existing user', async () => {
        const existingUser = {
            email: 'test@example.com',
            password: 'hashedPassword', // Mocked hashed password
            name: 'Test User',
            userType: 'Student',
         
        };
        const req = mockRequest({ email: 'test@example.com', password: 'password123' });
        const res = mockResponse();

        // Mocking UserModel.findOne method to return an existing user
        mockUserModelFindOne.mockResolvedValue(existingUser);

        // Mocking bcrypt.compare method to return true (password match)
        mockBcryptCompare.mockResolvedValue(true);

        // Mocking jwt.sign method
        const token = 'mockToken'; // Mocked token value
        mockJwtSign.mockReturnValue(token);

        await signin(req, res);

        expect(mockUserModelFindOne).toHaveBeenCalledWith({ email: req.body.email });
        expect(mockBcryptCompare).toHaveBeenCalledWith(req.body.password, existingUser.password);
        expect(mockJwtSign).toHaveBeenCalledWith(
            { email: existingUser.email, id: existingUser.id },
            'test', // Assuming 'test' is the secret
            { expiresIn: '1h' }
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            result: existingUser,
            user: {
                name: existingUser.name,
                email: existingUser.email,
                userType: existingUser.userType,
                
            },
            token: token,
            message: 'Login Succesful',
            ok: true,
        });
    });
    it('should return "User Does Not Exist!" message when user is not found', async () => {
        const req = mockRequest({ email: 'nonexistent@example.com', password: 'password123' });
        const res = mockResponse();

        // Mocking UserModel.findOne method to return null (user does not exist)
        mockUserModelFindOne.mockResolvedValue(null);

        await signin(req, res);

        expect(mockUserModelFindOne).toHaveBeenCalledWith({ email: req.body.email });
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'User Does Not Exist!' });
    });
    it('should return "Invalid Credential!" message when password is incorrect', async () => {
        const existingUser = {
            email: 'test@example.com',
            password: await bcrypt.hash('correctPassword', 12), // Hashed password
            name: 'Test User',
            userType: 'Student',
            _id: 'mockId'
        };
        const req = mockRequest({ email: 'test@example.com', password: 'incorrectPassword' });
        const res = mockResponse();
    
        // Mocking UserModel.findOne method to return an existing user
        mockUserModelFindOne.mockResolvedValue(existingUser);
    
        // Mocking bcrypt.compare method to return false (password doesn't match)
        mockBcryptCompare.mockResolvedValue(false);
    
        await signin(req, res);
    
        expect(mockUserModelFindOne).toHaveBeenCalledWith({ email: req.body.email });
        expect(mockBcryptCompare).toHaveBeenCalledWith(req.body.password, existingUser.password);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Credential!' });
    });
});

describe('signup', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should sign up a new user', async () => {
        const mockedHashedPassword = '$2a$12$7Vqrb6zcYhzNLa2ebgYlhOwJfKi1ivm0Xu5A3.34J4oAqT5VklSWG';
        jest.spyOn(bcrypt, 'hash').mockResolvedValue(mockedHashedPassword);
        
        const req = mockRequest({
            name: 'New User',
            email: 'newuser@example.com',
            password: 'password123',
            confirmPassword: 'password123',
            userType: 'Student'
        });
        const res = mockResponse();

        // Mocking UserModel.findOne method to return null (user does not exist)
        mockUserModelFindOne.mockResolvedValue(null);

        // Mocking bcrypt.hash method
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        // Mocking UserModel.create method to return the created user
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            userType: req.body.userType,
            _id: 'mockId'
        };
        mockUserModelCreate.mockResolvedValue(newUser);

        // Mocking jwt.sign method
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'test', { expiresIn: '1h' });

        await signup(req, res);

        expect(mockUserModelFindOne).toHaveBeenCalledWith({ email: req.body.email });
        expect(mockUserModelCreate).toHaveBeenCalledWith({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name,
            userType: req.body.userType,
        });
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            result: newUser,
            token: token,
            ok: true,
            message: 'Registration Successful'
        });
    });

    it('should return "Email Already Has An Account" message when user already exists', async () => {
        const existingUser = {
            name: 'Existing User',
            email: 'existinguser@example.com',
            userType: 'Student',
            _id: 'existingUserId'
        };
        const req = mockRequest({
            name: 'New User',
            email: existingUser.email,
            password: 'password123',
            confirmPassword: 'password123',
            userType: 'Student'
        });
        const res = mockResponse();

        // Mocking UserModel.findOne method to return an existing user
        mockUserModelFindOne.mockResolvedValue(existingUser);

        await signup(req, res);

        expect(mockUserModelFindOne).toHaveBeenCalledWith({ email: req.body.email });
        expect(mockUserModelCreate).not.toHaveBeenCalled(); // UserModel.create should not be called
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Email Already Has An Account. Kindly Sign In!',
            ok: true
        });
    });

    it('should return "Passwords do not match!" message when passwords do not match', async () => {
        const req = mockRequest({
            name: 'New User',
            email: 'newuser@example.com',
            password: 'password123',
            confirmPassword: 'password456', // Mismatched password
            userType: 'Student'
        });
        const res = mockResponse();

        // Mocking UserModel.findOne method to return null (user does not exist)
        mockUserModelFindOne.mockResolvedValue(null);

        await signup(req, res);

        expect(mockUserModelFindOne).toHaveBeenCalledWith({ email: req.body.email });
        expect(mockUserModelCreate).not.toHaveBeenCalled(); // UserModel.create should not be called
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ message: 'Passwords do not match!' });
    });

    it('should successfully sign up a new user and return token', async () => {
        const req = mockRequest({
            name: 'New User',
            email: 'newuser@example.com',
            password: 'password123',
            confirmPassword: 'password123',
            userType: 'Student'
        });
        const res = mockResponse();

        const hashedPassword = 'hashedPassword';
        const user = {
            _id: 'userId',
            email: req.body.email,
            name: req.body.name,
            userType: req.body.userType
        };
        const token = 'mockToken';

        // Mocking bcrypt.hash method to return the hashed password
        mockBcryptHash.mockResolvedValue(hashedPassword);

        // Mocking UserModel.create method to return the created user
        mockUserModelCreate.mockResolvedValue(user);

        // Mocking jwt.sign method to return the token
        mockJwtSign.mockReturnValue(token);

        await signup(req, res);

        expect(mockBcryptHash).toHaveBeenCalledWith(req.body.password, 12);
        expect(mockUserModelCreate).toHaveBeenCalledWith({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name,
            userType: req.body.userType
        });
        expect(mockJwtSign).toHaveBeenCalledWith(
            { email: user.email, id: user._id },
            'test',
            { expiresIn: '1h' }
        );
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            result: user,
            token: token,
            ok: true,
            message: 'Registration Successful'
        });
    });
    it('should return an error message when an error occurs during signup', async () => {
        const req = mockRequest({
            name: 'New User',
            email: 'newuser@example.com',
            password: 'password123',
            confirmPassword: 'password123',
            userType: 'Student'
        });
        const res = mockResponse();

        const error = new Error('Test error');

        // Mocking bcrypt.hash method to throw an error
        mockBcryptHash.mockRejectedValue(error);

        await signup(req, res);

        expect(mockBcryptHash).toHaveBeenCalledWith(req.body.password, 12);
        expect(mockUserModelCreate).not.toHaveBeenCalled();
        expect(mockJwtSign).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Something Went Wrong' });
    });
});