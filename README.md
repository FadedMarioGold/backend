# Contact Application API

This project is a backend API for managing contacts. It includes user authentication and CRUD operations for contacts.

## Features

- User registration and login
- Create, update, delete, and view contacts
- Authentication and authorization using JWT

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js
- MongoDB (or MongoDB Atlas for cloud database)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend

2.  Install dependencies:
    bash
    Copy code
    npm install

3. Set up environment variables in a .env file:
   PORT=5001
   MONGO_URI=your_mongo_db_uri
   ACCESS_TOKEN_SECRET=your_secret_key


    API Routes
    POST /api/users/register: Register a new user
    POST /api/users/login: User login
    GET /api/contacts: Get all contacts for the authenticated user
    POST /api/contacts: Add a new contact
    GET /api/contacts/
    : Get a specific contact by ID
    PUT /api/contacts/
    : Update a contact by ID
    DELETE /api/contacts/
    : Delete a contact by ID