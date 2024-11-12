# Step 1: Build the application using a Node.js image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built files from the previous step to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

COPY entrypoint.sh /entrypoint.sh

RUN cat /entrypoint.sh
# Make entrypoint.sh executable
RUN chmod +x /entrypoint.sh

# Expose port 80 to make it accessible
EXPOSE 80

# Use entrypoint.sh to start the server
ENTRYPOINT ["/entrypoint.sh"]



# Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]

