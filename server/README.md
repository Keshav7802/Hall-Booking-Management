# Hall-Booking-Management-Backend
# API Documentation

This is a document for various API's being developed

## Base URL

The base URL for accessing the API is: localhost for now

## Endpoints

### 1. Register User

- *URL*: /{base-url}/user/signup
- *Method*: POST
- *Description*: Register a new user.
- *Request Body*:
  - name (string): User's name.
  - email (string): User's email address.
  - password (string): User's password.
  - confirmPassword (string): Confirmation of user's password.
  - userType (string): Type of user (optional).
- *Response*:
  - result: Details of the registered user.
  - token: Authentication token for the registered user.

#### Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "userType": "student"
}
```

### 2. Login User

- *URL*: /{base-url}/user/signin
- *Method*: POST
- *Description*: Log in an existing user.
- *Request Body*:
  - email (string): User's email address.
  - password (string): User's password.
- *Response*:
  - result: Details of the logged-in user.
  - token: Authentication token for the logged-in user.

### Example Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
