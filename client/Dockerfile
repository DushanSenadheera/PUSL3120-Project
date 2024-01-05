# Base image for client
FROM node:alpine

WORKDIR /app/client

# Install client dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

# Copy client source code
COPY ./ .

# Expose port
EXPOSE 8000

# Set entry point
CMD ["npm", "run", "dev"]