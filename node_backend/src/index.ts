import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import apiRoutes from './routes/apiRoutes.js'; // Import your routes

// Create an Express application
const app = express();

// Use the imported routes
app.use(apiRoutes); // This will handle all your routes

// Get port from the environment variable
const port = process.env.PORT;

if (port === undefined) {
  console.error('PORT environment variable is not set in the .env file.');
  process.exit(1); // Exit the process with an error if the PORT is undefined
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
