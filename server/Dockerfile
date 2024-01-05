# Base image for server
FROM node:alpine

WORKDIR /app/server

# Install server dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

# Copy server source code
COPY ./ .

# Expose ports
EXPOSE 3000

# Set entry point
CMD ["npm", "start"]
