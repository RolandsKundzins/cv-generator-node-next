# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY ./node_backend/package*.json ./

# Install dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application code
COPY ./node_backend .

# Expose the port your app will run on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]
