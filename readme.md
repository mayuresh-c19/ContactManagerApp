# Contact Manager Application

A full-stack contact management application built with Node.js, Express, MongoDB, and React.

## Features

- User registration and login with JWT-based authentication and authorization.
- Create, read, update, and delete (CRUD) operations for managing contacts.
- Responsive user interface with seamless navigation using React and React Router.
- Robust error handling and asynchronous operations management.

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, React Router, Axios
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/contact-manager.git
   cd contact-manager/backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to [http://localhost:5000](http://localhost:5000).
2. Register a new user or login with existing credentials.
3. Add, view, update, and delete contacts.

## API Endpoints

- `POST /api/users/register` - Register a new user.
- `POST /api/users/login` - Login a user.
- `GET /api/contacts` - Get all contacts.
- `POST /api/contacts` - Create a new contact.
- `GET /api/contacts/:id` - Get a contact by ID.
- `PUT /api/contacts/:id` - Update a contact by ID.
- `DELETE /api/contacts/:id` - Delete a contact by ID.

## License

This project is licensed under the MIT License.
