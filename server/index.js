require('dotenv').config();

const express = require('express');
const app = express();
const connectToDb = require('./config');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
//app.use(express.json());
//app.use(cors);
app.use('/', userRoute);

connectToDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});





  









  

