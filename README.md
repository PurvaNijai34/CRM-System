# Title : CRM System

## 🌐 Live Demo  https://crm-system-neon-six.vercel.app/

## 📑 Table of Contents

- [🔍 Overview](#overview)
- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🗄️ Database Design](#database-design)
- [📂 Project Structure](#project-structure)
- [⚙️ Installation](#instalaltion)
- [🔒 Environment Variables](#env)
- [📷 Screenshot](#screenshot)
- [👤 Author](#author)

<h2><a class="anchor" id="overview"> 🔍Overview</a></h2>

A full-stack Support CRM System built using the MERN Stack with JWT Authentication and Role-Based Access Control.

This application allows customers to create support tickets and enables administrators to manage, track, update, and resolve customer issues efficiently.

---

<h2><a class="anchor" id="features">✨ Features</a></h2>

## 👤 Customer Features

- Customer Registration
- Customer Login
- JWT Authentication
- Create Support Tickets
- View Own Tickets
- Protected Routes
- Secure Access Control

🛠️ Admin Features

- Admin Login
- View All Tickets
- Search Tickets
- Filter Tickets by Status
- View Ticket Details
- Update Ticket Status
- Add Internal Notes
- Dashboard Statistics
- Role-Based Authorization

---

<h2><a class="anchor" id="tech-stack"> 🛠️ Tech Stack</a></h2>

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

<h2><a class="anchor" id="database-design"> 🗄️ Database Design</a></h2>

## User Collection
```
{ 
    "_id": "ObjectId", 
    "name": "Purva", 
    "email": "purva@gmail.com", 
    "password": "hashedPassword", 
    "role": "customer" 
}
```

## Tickets Collection

```
{ 
    "ticketId": "TKT-001", 
    "customerName": "Purva", 
    "customerEmail": "purva@gmail.com", 
    "subject": "Login Issue", 
    "description": "Unable to login to the application",
    "status": "Open", 
    "createdBy": "userId",
    "notes": [],
    "createdAt": "timestamp", 
    "updatedAt": "timestamp"
}
```
<h2><a class="anchor" id="project-structure">📂 Project Structure</a></h2>

```bash
HabitZen-AI/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── components/
│   │
│   └── package.json
│
└── README.md

```

<h2><a class="anchor" id="installation">⚙️ Installation</a></h2>

### 1. Clone Repository

```bash
git clone https://github.com/PurvaNijai34/CRM-System.git
```

### 2. Backend setup

#### Go to Backend Folder

```bash
cd backend
npm install
npm run server
```

### 3. Frontend setup

#### Go to Frontend Folder

```bash
cd frontend
npm install
npm run dev
```

<h2><a class="anchor" id="env">🔒 Environment Variables</a></h2>

### 📁 Frontend (.env)

```bash
VITE_API_URL=your_backend_url/api
```

### 📁 Backend (.env)

```bash
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
```

<h2><a class="anchor" id="author"> 👤 Author</a><h2/>

**Purva Nijai**

### - 💼 GitHub: [PurvaNijai34](https://github.com/PurvaNijai34)

### - 🔗 LinkedIn: https://www.linkedin.com/in/purva-nijai-6041002a5/

### - 📧 Email: purvanijai05@gmail.com
