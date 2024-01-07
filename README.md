[![DockerHub Deployment](https://github.com/DushanSenadheera/PUSL3120-Project/actions/workflows/deploy-to-dockerhub.yml/badge.svg?branch=main)](https://github.com/DushanSenadheera/PUSL3120-Project/actions/workflows/deploy-to-dockerhub.yml)
[![CodeQL](https://github.com/DushanSenadheera/PUSL3120-Project/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/DushanSenadheera/PUSL3120-Project/actions/workflows/codeql.yml)
[![Node.js CI](https://github.com/DushanSenadheera/PUSL3120-Project/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/DushanSenadheera/PUSL3120-Project/actions/workflows/ci.yml)

### Cinema booking application using MERN Stack
fully functioning movie ticket booking web application with admin dashboard created using MERN Stack

## how to run locally?
- add `.env` file to root of the server directory and define port as `PORT = '8000'` and add connection string as `DATABASE = 'MONGODB_CONNECTION_STRING_HERE'` and define JSON Web Token secrect as `JWT = 'JWT_SECRET'`
- install necassary dependancies for server using `npm install` command
- execute `npm start` command to run server
- change your directory into client folder using `cd client` command
- again install necassary dependancies for client using `npm install` command
- run your client using `npm run dev` command

## How to Run the Application Using Docker
- Pull the Docker image from Docker Hub: `docker pull dcsenadheera/cinema-booking-app`.
- Run the Docker image: `docker run -p 8000:8000 dcsenadheera/cinema-booking-app`.
  
The application should now be running at `http://localhost:8000`.
