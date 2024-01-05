require('dotenv').config();

const express = require('express');
const app = express();
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

app.use('/', userRoute);
app.use('/', adminRoute);
app.use('/', premireRoute);
app.use('/', bookingRoute);
app.use('/', upcomingRoute);

connectToDb();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});





  









  

