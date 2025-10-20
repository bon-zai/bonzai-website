# Use Node 18 Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose the port Railway will use (Railway sets PORT environment variable)
EXPOSE $PORT

# Start the application
CMD ["npm", "run", "preview"]