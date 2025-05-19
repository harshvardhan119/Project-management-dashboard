

# 🗂️ Project Manager App

A full-stack **Project Manager** application built with **React** (frontend) and **Node.js + Express + MongoDB** (backend). Users can register, log in, and manage their personal projects securely.

---

## 🚀 Features

### 🔐 Authentication
- User registration & login
- JWT-based authentication
- Auth context & protected routes

### 📁 Project Management
- Create, read, update, delete (CRUD) projects
- Each user sees only their own projects
- Clean and responsive UI with Tailwind CSS

---

## 🧱 Tech Stack

### Frontend
- React (with Hooks)
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- bcryptjs for password hashing
- jsonwebtoken for authentication
- CORS + cookie-parser

---

## 📦 Folder Structure

```

project-manager/
├── client/               # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── server/               # Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
├── README.md
└── .env

````

---

## 🛠️ Getting Started

### 📌 Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)
- npm / yarn

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/harshvardhan119/Project-management-dashboard.git
cd Project-management-dashboard
````

---

### 2. Setup Backend

```bash
cd backend
npm install
```

#### Create `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

#### Run the server:

```bash
node server.js
```

---

### 3. Setup Frontend

```bash
cd frontend
npm install
```

#### Run the React app:

```bash
npm run dev   
```

Frontend should be running at `http://localhost:5173` (or Vite's port if used), and the backend at `http://localhost:5000`.

---

## 🔐 API Routes (Backend)

### Auth Routes

* `POST /auth/register` – Register user
* `POST /auth/login` – Login user

### Project Routes

* `GET /projects` – Get user's projects
* `GET /projects/:id` – Get single project
* `POST /projects` – Create project
* `PUT /projects/:id` – Update project
* `DELETE /projects/:id` – Delete project

> All project routes are protected and require JWT token in the `Authorization` header.

---

## 🌐 video link
https://www.loom.com/share/2c02addf6aa741bdb2ca5de6cdd9ef14?sid=55c929a2-4edc-43af-a801-367691eb62db


---


