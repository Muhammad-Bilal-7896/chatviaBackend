# ChatVia Backend

<p align="center">
  <img src="https://camo.githubusercontent.com/85cf7e1a8b85221e81ba91cbce29c917b91a7390bb3ca06aa31cfd1eadd7fe60/68747470733a2f2f7777772e337269746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f31312f4d45524e2d537461636b2d547261696e696e672d696e2d50756e652d65313537353032323432373234342e706e67" alt="MERN logo" title="MERN logo">
</p>
This repository contains the backend code for ChatVia, a chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). 💬🔥

## Features ✨
- User authentication and authorization 🔒🔑
- Real-time messaging between users 💬🌐
- List of all chats and chat users 📜👥
- Create, update, and delete chats and chat users ✏️✅🗑️

## Technologies Used 🛠️
- **MongoDB**: A NoSQL database used to store chat data and user information. 🍃🗄️
- **Express.js**: A web application framework used to build the backend API endpoints. 🌐🚀
- **React.js**: A JavaScript library used to build the frontend user interface. ⚛️🖥️
- **Node.js**: A JavaScript runtime environment used to execute server-side code. 📦🔧
- **Socket.IO**: A library that enables real-time, bidirectional communication between the server and clients. 🌐⚡
- **Mongoose**: An Object Data Modeling (ODM) library used to interact with MongoDB. 🍃🔌
- **JSON Web Tokens (JWT)**: A method for securely transmitting information between parties as JSON objects. 🔐🔑

## Prerequisites ⚙️
- Node.js (LTS=18.16.0) on date 6/14/2023 installed on your machine 🖥️🔧
- MongoDB database connection URL 🗄️

## Getting Started 🚀
<ol>
   <li>
   <p>Clone the repository:</p>
   ```bash
   git clone https://github.com/your-username/chatvia-backend.git
   ```
   </li>
   <li>
   <p>Install dependencies:</p>
   ```bash
   cd chatvia-backend
   npm install
   ```
   </li>
   Set up the environment variables:
Create a .env file in the root directory of the project.
Add the following environment variables to the .env file: 
There, assign the connection string to a new ATLAS_URI variable. Once done, your file should look similar to the one below. Replace <username> and the <password> with your database username and password.
`ATLAS_URI=mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority`
   <li>
   <li>
     <p>Start the server:</p>
     ```bash
     npm start
        ```

        The backend server will start running at http://localhost:5000. 🚀🌐
   </li>
</ol>

## API Endpoints 📡
The following are the API endpoints that can be accessed from this backend server. 📡🌐

### Registered Users 👥
- GET /registeredUsers: Get a list of all registered users.
- GET /registeredUsers/:id: Get a single registered user by ID.
- POST /registeredUsers: Create a new registered user.
- PATCH /registeredUsers/:id: Update a registered user by ID.
- DELETE /registeredUsers/:id: Delete a registered user by ID.

### Chats 💬
- GET /chats: Get a list of all chats.
- GET /chats/:id: Get a single chat by ID.
- POST /chats: Create a new chat.
- PATCH /chats/:id: Update a chat by ID.
- DELETE /chats/:id: Delete a chat by ID.

## Chat User List 👥
- GET /chatUserList: Get a list of all chat users.
- GET /chatUserList/:id: Get a single chat user by ID.
- POST /chatUserList: Create a new chat user.
- PATCH /chatUserList/:id: Update a chat user by ID.
- DELETE /chatUserList/:id: Delete a chat user by ID.

## Screenshots 📷
<p align="center">
  <img src="https://ibb.co/YjwvdjH" alt="Screenshot 1">
  <img src="https://ibb.co/2F5C9Xj" alt="Screenshot 2">
  <!-- Add more screenshots if necessary -->
</p>
