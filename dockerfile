# customer-management-backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the entire backend application
COPY . .

# Expose the port and start the server
EXPOSE 4000
CMD ["node", "server.js"]
