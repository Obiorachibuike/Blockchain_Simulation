# Use Node.js Alpine for a lightweight image
FROM node:18-alpine  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install  

# Copy the rest of the application files
COPY . .

# Set the command to run the application
CMD ["node", "index.js"]
