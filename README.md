# Activity Booking System with Authentication

This is a backend API for an **Activity Booking System** with **User Registration & Login**, **Activity Listing**, and **Activity Booking** functionalities. The project is built using **Node.js** and utilizes **JWT authentication**, **Bcrypt for password hashing**, **Joi for validation**, and **http-status for correct HTTP status codes**. Environment variables are managed using a **config.js** file.

## Features

1. **User Registration & Login**
   - **Register User**: Accepts `name`, `email`, `phone number`, and `password`.
   - **Login User**: Accepts `email` and `password`, and returns a **JWT auth token** for authorization.

2. **List Activities (Public Endpoint)**
   - Public endpoint to list available activities like `cricket`, `movies`, `football matches`, etc.
   - Each activity includes: 
     - `id`, `title`, `description`, `location`, `date`, and `time`.

3. **Book an Activity (Authorized Users Only)**
   - Only authorized users can book an activity by providing the `activity ID`.
   - Booking info is saved with the user who booked the activity.

4. **Get My Bookings (Authorized Users Only)**
   - Retrieve the list of all activities booked by the logged-in user.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ORM)
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Joi** for input validation
- **http-status** for consistent status codes
- **config.js** for environment variable management

## Installation

### Prerequisites

1. **Node.js** (version >= 16.x)
2. **MongoDB** (either local or using MongoDB Atlas)
3. **NPM** or **Yarn**

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/Prateeknegi2501/Basic-Activity-Booking-App.git

2. Install dependencies:
    ```bash
    npm install

3. Create a .env file in the root directory and configure the following variables:

    ```bash
    PORT=8080
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret_key
3. Start the development server:

    ```bash
    npm start

The server will run on http://localhost:8080 .

## Endpoints

### 1. User Registration

- **URL**: `/api/auth/register`
- **Method**: `POST`

#### Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123"
}
```

### 2. User Login

- **URL**: `/api/auth/login`
- **Method**: `POST`

#### Request Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```


### 3. Create and View Activities(Public EndPoint)

- **URL**: `/api/activities`
- **Method**: `GET & POST`


### 4. Book an Activity (Authorized Users Only)

- **URL**: `/api/bookings/:id`
- **Method**: `POST`

### 4. GET My Bookings (Authorized Users Only)

- **URL**: `/api/bookings/:id`
- **Method**: `GET`

