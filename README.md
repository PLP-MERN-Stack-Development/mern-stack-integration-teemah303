📘 MERN Blog Application

A full-stack MERN Blog Application built with MongoDB, Express.js, React.js, and Node.js.
This project includes full CRUD operations, authentication, image uploads, comments, pagination, and a clean client–server architecture.

⸻

🚀 Features

🖥️ Front-End (React + Vite)
	•	Modern React component architecture
	•	React Router for navigation
	•	Hooks-based state management
	•	Custom hook for API communication
	•	Optimistic UI updates
	•	Responsive UI
	•	Image upload support
	•	Post list, post detail, create/edit forms

🛠️ Back-End (Node + Express + MongoDB)
	•	RESTful API
	•	Mongoose models & relationships
	•	JWT authentication
	•	Multer for file uploads
	•	Input validation with express-validator
	•	Category & Post management
	•	Error-handling middleware

🔒 Authentication
	•	User registration
	•	User login
	•	Protected routes
	•	Token-based authorization

📝 Blog Features
	•	Create, read, update, delete posts
	•	Category filtering
	•	Comments on posts
	•	Pagination
	•	Search posts

⸻

📂 Project Structure

mern-blog/
├── client/                 
│   ├── public/             
│   ├── src/                
│   │   ├── components/     
│   │   ├── pages/          
│   │   ├── hooks/          
│   │   ├── services/       
│   │   ├── context/        
│   │   └── App.jsx         
│   └── package.json        
│
├── server/                 
│   ├── config/             
│   ├── controllers/        
│   ├── models/             
│   ├── routes/             
│   ├── middleware/         
│   ├── utils/              
│   ├── server.js           
│   └── package.json        
│
└── README.md               


⸻

⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone <your-github-classroom-repo-link>
cd mern-blog


⸻

2️⃣ Backend Setup

cd server
npm install

Create a .env file inside server/:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-blog
JWT_SECRET=yourSecretKey

Start the backend:

npm run dev

Backend runs at:

http://localhost:5000


⸻

3️⃣ Frontend Setup

cd client
npm install

Create client/.env:

VITE_API_URL=http://localhost:5000/api

Start the React app:

npm run dev

Frontend runs at:

http://localhost:5173


⸻

🛣️ API Documentation

📌 Posts Routes

Method	Endpoint	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get a single post
POST	/api/posts	Create a post
PUT	/api/posts/:id	Update a post
DELETE	/api/posts/:id	Delete a post

Post Model

title: String
content: String
image: String
author: ObjectId (User)
categories: [ObjectId]
comments: [{ text, author }]


⸻

📌 Categories Routes

Method	Endpoint	Description
GET	/api/categories	Get all categories
POST	/api/categories	Create new category


⸻

📌 Authentication Routes

Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user


⸻

📤 Image Uploads

Images are uploaded using Multer.

Endpoint:

POST /api/upload

Form field:

image

Returns:

{
  "filePath": "/uploads/173142991.jpg"
}


⸻

🧪 Testing the API

Use Postman, Thunder Client, or cURL.

Example: Create Post

POST /api/posts
Authorization: Bearer <token>
Content-Type: application/json

Body:

{
  "title": "My First Blog Post",
  "content": "This is the content",
  "categories": ["673e1f29a0e"]
}


⸻

📌 Technologies Used

Frontend
	•	React.js
	•	Vite
	•	Axios
	•	React Router
	•	Context API

Backend
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	Multer
	•	express-validator
	•	JWT

⸻

🧑‍💻 Author : (Teemah)
GitHub: https://github.com/teemah303

⸻

✅ Status

✔️ Completed as part of Week 4 MERN Stack Classroom Assignment
✔️ Fully functional blog system
✔️ Includes advanced features