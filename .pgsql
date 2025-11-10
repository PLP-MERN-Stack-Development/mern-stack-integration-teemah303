echo "mern-blog/
├── client/                 # React front-end (Vite)
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Nav.jsx
│       │   ├── PostCard.jsx
│       │   ├── PostList.jsx
│       │   ├── PostView.jsx
│       │   ├── PostForm.jsx
│       │   └── CommentList.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── NewPost.jsx
│       │   ├── EditPost.jsx
│       │   ├── PostPage.jsx
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       ├── hooks/
│       │   └── useApi.js
│       ├── services/
│       │   └── api.js
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── App.jsx
│       └── main.jsx
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postsController.js
│   │   ├── categoriesController.js
│   │   └── commentsController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Category.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── posts.js
│   │   ├── categories.js
│   │   └── comments.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── upload.js
│   ├── utils/
│   │   └── validators.js
│   ├── server.js
│   └── package.json
└── README.md
