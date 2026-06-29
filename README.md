# Project Management API

This is the backend API for a comprehensive project management application. It is built with Node.js, Express, and MongoDB, and provides a robust foundation for handling users, authentication, and more.

## ✨ Features

- **User Authentication**: Secure user registration and login.
- **JWT-based Authorization**: Uses JSON Web Tokens (Access and Refresh) for securing API endpoints.
- **Secure Password Handling**: Passwords are encrypted using `bcrypt`.
- **Email Functionality**:
  - User email verification upon registration.
  - "Forgot Password" flow to allow users to reset their password.
- **User Profiles**: Supports user avatars and basic profile information.
- **Role-based Access Control**: `role` field in the user model to enable different permission levels.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: `jsonwebtoken` (JWT), `bcrypt`
- **Emailing**: `Nodemailer` (configured for Mailtrap in development)
- **Environment Variables**: `dotenv`

##  Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn
- A MongoDB Atlas account or a local MongoDB instance.
- A Mailtrap account for testing email functionality in a development environment.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd project-management
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project by copying the example file:

```bash
cp .env.example .env
```

Now, open the `.env` file and fill in the required values:

- `MONGO_URI`: Your MongoDB connection string.
- `PORT`: The port for the server to run on (e.g., 3000).
- `ACCESS_TOKEN_SECRET` & `REFRESH_TOKEN_SECRET`: Long, random, secret strings for signing JWTs.
- `MAILTRAP_*`: Your SMTP credentials from your Mailtrap inbox.

### 4. Run the Application

To start the server in development mode with automatic reloading, run:

```bash
npm run dev
```

The server will start on the port you specified in your `.env` file (e.g., `http://localhost:3000`).

## ⚙️ Environment Variables

The following variables are required for the application to run. See `.env.example` for a template.

| Variable                 | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `MONGO_URI`              | Connection string for your MongoDB database.                             |
| `PORT`                   | The port the Express server will listen on.                              |
| `CORS_ORIGIN`            | The origin allowed to make requests to this API (e.g., `http://localhost:5173` or `*`). |
| `ACCESS_TOKEN_SECRET`    | Secret key for signing access tokens.                                    |
| `ACCESS_TOKEN_EXPIRY`    | Expiry time for access tokens (e.g., `1d`, `15m`).                       |
| `REFRESH_TOKEN_SECRET`   | Secret key for signing refresh tokens.                                   |
| `REFRESH_TOKEN_EXPIRY`   | Expiry time for refresh tokens (e.g., `10d`).                            |
| `MAILTRAP_SMTP_HOST`     | SMTP host from Mailtrap.                                                 |
| `MAILTRAP_SMTP_PORT`     | SMTP port from Mailtrap.                                                 |
| `MAILTRAP_SMTP_USER`     | SMTP username from Mailtrap.                                             |
| `MAILTRAP_SMTP_PASS`     | SMTP password from Mailtrap.                                             |

---