# Slim has smaller image size (almost 3x smaller), but you may need to install additional dependecies like openssl bellow
FROM node:23-slim

# Set the working directory in the container
WORKDIR /app

# Install OpenSSL and any other required system dependencies
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY ./node_backend/package.json ./node_backend/pnpm-lock.yaml ./

COPY node_backend/prisma ./prisma

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code (not needed for development as it is mounted)
# COPY ./node_backend .

# Expose the port your app will run on
EXPOSE 3000

# Command to run the app
# CMD ["pnpm", "run", "dev"]
