# Use the latest stable version of Node (as of the last update)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Explicitly install Bootstrap
RUN npm install bootstrap

# Install the rest of the project dependencies
RUN npm ci

RUN npm install
RUN npm install react-responsive-carousel
RUN npm install axios

RUN npm i react-cookie --legacy-peer-deps

# Copy the rest of the code
COPY public/ ./public/
COPY src/ ./src/

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 9100

# Serve the static files from the build directory
CMD ["npx", "serve", "-s", "build", "-l", "9100"]
