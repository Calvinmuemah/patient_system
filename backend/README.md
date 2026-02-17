# Backend Setup

## Getting Started

Follow these steps to set up and run the backend server for the Patient Management System.

### Prerequisites
- Node.js (v16 or later)
- MongoDB Atlas account and connection string

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
1. Create a `.env` file in the `backend` directory.
2. Use the examples provided in the `.env.example` file to configure your environment variables.
3. Replace `<your-mongo-db-atlas-link>` in the `MONGO_URL` variable with your MongoDB Atlas connection string.

Example `.env` file:
```
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

### Running the Server
Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

### Development Mode
To run the server in development mode:
```bash
npm run dev
```

### API Endpoints
Refer to the API documentation for available endpoints.