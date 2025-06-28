# Learning Management System (LMS)

A full-stack Learning Management System built with MERN stack (MongoDB, Express.js, React.js, Node.js).

## 📋 Features

- **User Authentication**
  - Student and Instructor roles
  - Secure login/signup
  - Profile management

- **Course Management**
  - Create and manage courses (Instructors)
  - Enroll in courses (Students)
  - Track progress

- **Interactive Learning**
  - Video lectures
  - Quizzes and assignments
  - Discussion forums

## 🚀 Tech Stack

- **Frontend**: 
  - React.js
  - React Router for navigation
  - State management (Context API/Redux)
  - Styled Components/Tailwind CSS

- **Backend**:
  - Node.js with Express.js
  - MongoDB with Mongoose ODM
  - JWT Authentication
  - RESTful API

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd LMS
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   - Create a `.env` file in the server directory with:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

## 🚦 Running the Application

1. **Start the server**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the client**
   ```bash
   cd ../client
   npm start
   ```

3. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
LMS/
├── client/                 # Frontend React application
├── server/                 # Backend Node.js/Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── .env                # Environment variables
│   └── server.js           # Express server
└── README.md              # Project documentation
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- References
