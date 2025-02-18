import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import api_routes from './routes/apiRoutes.js'; // Import your routes
import user_routes from './routes/userRoutes.js';

// Create an Express application
const app: Express = express();
app.use(express.json()); // This will parse JSON bodies

// Use the imported routes
app.use(api_routes);
app.use('/users', user_routes);

// Get port from the environment variable
const port = process.env.PORT;

if (port === undefined) {
  console.error('PORT environment variable is not set in the .env file..');
  process.exit(1); // Exit the process with an error if the PORT is undefined
}

// Start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

// Export the app for testing
export default app;
