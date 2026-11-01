# Task Management System

A full-stack task management web application built with React, Tailwind CSS, Node.js, Express, and MongoDB.

The project is designed to provide a foundation for organizing tasks through a modern frontend and a backend API.

## 📌 Overview

The Task Management System is a full-stack development project that combines a React-based user interface with a Node.js and Express backend. MongoDB is used for data persistence through Mongoose.

This project demonstrates the integration of frontend development, backend API development, database connectivity, and supporting libraries for authentication, validation, and file handling.

## 🛠️ Tech Stack

### Frontend
- **React** — Building the user interface.
- **Tailwind CSS** — Styling and responsive layouts.
- **Vite** — Frontend development server and build tooling.
- **React Router** — Client-side navigation.
- **TanStack Query** — Server-state management.
- **Axios** — HTTP requests to backend APIs.
- **Zustand** — Client-side state management.

### Backend
- **Node.js** — JavaScript runtime.
- **Express.js** — Backend API framework.
- **MongoDB** — NoSQL database.
- **Mongoose** — MongoDB object modeling.
- **JSON Web Token (JWT)** — Token-based authentication support.
- **bcryptjs** — Password-hashing support.
- **Zod** — Data validation.
- **Cloudinary** — Cloud media management integration.
- **Multer** — Handling uploaded files.
- **Helmet** — HTTP security headers.
- **express-rate-limit** — Request rate limiting.
- **Morgan** — HTTP request logging.
- **Swagger tools** — API documentation tooling.

## 📂 Project Structure

```text
task-management-system/
├── backend/
│   └── index.js
├── frontend/
│   ├── package.json
│   └── src/
├── package.json
├── package-lock.json
└── .gitignore
```

The frontend and backend are maintained in separate directories within the same repository.

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/) or a MongoDB Atlas database

### 1. Clone the repository

```bash
git clone https://github.com/Eng-Rahma-Nor-Abdirahman/task-management-system.git
```

### 2. Open the project directory

```bash
cd task-management-system
```

### 3. Install backend dependencies

```bash
npm install
```

### 4. Install frontend dependencies

```bash
npm install --prefix frontend
```

### 5. Configure environment variables

Create the environment configuration file expected by the backend and provide the required values for your database connection, authentication secret, and any external services used by the application.

Keep credentials and API keys private. Do not commit `.env` files containing secrets to GitHub.

### 6. Start the backend

From the project root, run:

```bash
npm run server
```

### 7. Start the frontend

Open a second terminal in the project root and run:

```bash
npm run dev --prefix frontend
```

Open the local URL displayed by Vite in your terminal.

> Note: The exact environment variable names, API endpoints, and database configuration should match the application's current source code.

## 🔐 Security Considerations

The project includes dependencies for authentication support, input validation, security headers, and request rate limiting.

For deployment, ensure that secrets are stored securely, sensitive routes are properly protected, and incoming data is validated by the backend.

## 🚀 Running a Production Build

To build the frontend, run:

```bash
npm run build --prefix frontend
```

This generates the frontend production build using Vite.

## 🌱 Future Improvements

Potential areas for further development include:

- Improving task organization and management workflows.
- Expanding automated testing.
- Enhancing accessibility and responsive design.
- Improving API documentation.
- Adding deployment and continuous integration workflows.

These are potential improvements, not claims that the features are already implemented.

## 👩‍💻 Author

**Rahma Nor Abdirahman**

AI Full-Stack Engineer

- GitHub: [@Eng-Rahma-Nor-Abdirahman](https://github.com/Eng-Rahma-Nor-Abdirahman)
- Project Repository: [Task Management System](https://github.com/Eng-Rahma-Nor-Abdirahman/task-management-system)

---

Built as part of my journey in full-stack development, with an interest in creating practical and reliable software applications.

If you find this project useful, consider giving the repository a ⭐.
