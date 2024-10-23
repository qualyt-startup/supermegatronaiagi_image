# Use official Node.js image for Apple Silicon (ARM64)
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Run the app
CMD ["node", "server.js"]
