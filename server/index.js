require('dotenv').config();

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const connectToDb = require('./config');
const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');
const premireRoute = require('./routes/premireRoute');
const bookingRoute = require('./routes/bookingRoute');
const upcomingRoute = require('./routes/upcomingRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({origin: '*',}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/', userRoute);
app.use('/', adminRoute);
app.use('/', premireRoute);
app.use('/', bookingRoute);
app.use('/', upcomingRoute);

connectToDb();

let bookedSeats = [];

io.on('connection', (socket) => {
    socket.on('check-seat', (seat, callback) => {
        callback(bookedSeats.includes(seat));
    });

    socket.on('seat-booked', (seat) => {
        bookedSeats.push(seat);
        socket.broadcast.emit('seat-booked', seat);
    });

    socket.on('seat-unbooked', (seat) => {
        bookedSeats = bookedSeats.filter(s => s !== seat);
        socket.broadcast.emit('seat-unbooked', seat);
    });
});

server.listen(process.env.PORT, (res) => {
    console.log(`Server is running at port ${process.env.PORT}`);
});





  









  

