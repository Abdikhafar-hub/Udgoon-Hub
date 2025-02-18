# Udgoon Hub

Udgoon Hub is a full-stack web application designed to provide a seamless shopping experience for luxury fragrances. The application is built using React for the frontend and Node.js with Express for the backend. It also integrates with MongoDB for data storage and uses various other technologies to enhance functionality.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Product browsing and searching
- Shopping cart and checkout process
- Order tracking and history
- User profile management
- Notifications and alerts
- Customer support and returns
- Mpesa Payment integration
- Responsive design

## Technologies Used

### Frontend

- React
- Vite
- React Router
- Chakra UI
- Axios

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication
- Multer for file uploads
- Socket.io for real-time communication

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm run dev
   ```

### Usage

Open your browser and navigate to http://localhost:3000 to access the frontend.
Use Postman or any API client to interact with the backend at http://localhost:5000.
View it LIVE here https://udgoon-hub.vercel.app/

## Folder Structure
```
Udgoon Hub/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── mpesaRoutes.js
│   │   └── userRoutes.js
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── mpesa.png
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── cart/
│   │   │   ├── Footer.jsx
│   │   │   ├── Home/
│   │   │   └── navbar/
│   │   ├── Contexts/
│   │   │   └── UserContext.jsx
│   │   ├── pages/
│   │   │   ├── AllRouter.jsx
│   │   │   ├── CartPage.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── vercel.json
│   └── vite.config.js
├── README.md
```
### API Endpoints

# Authentication
```
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
POST /api/auth/logout - Logout a user
```
# User
```
GET /api/user/profile - Get user profile
PUT /api/user/profile - Update user profile
DELETE /api/user/profile - Delete user profile
```
# Orders
```
GET /api/orders - Get all orders
POST /api/orders - Create a new order
GET /api/orders/:id - Get order by ID
PUT /api/orders/:id - Update order by ID
DELETE /api/orders/:id - Delete order by ID
```

# Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

# License
This project is licensed under the MIT License.

