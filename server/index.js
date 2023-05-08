const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
var cors = require('cors');
var logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });



connectDB();
app.use(bodyParser.json(),urlEncodedParser);
app.use(cors());
app.use(logger('dev'));
app.use('/login', require('./routes/loginRouter'));
app.use('/register', require('./routes/registerRouter'));
app.use('/score', require('./routes/ScoreRouter'));
app.use('/company', require('./routes/CompanyRouter'));
app.use( '/job', require('./routes/JobRouter'));
app.use('/offer', require('./routes/OfferRouter'));
app.use('/employee', require('./routes/EmployeeRouter'));
app.use('/appliedjobs',require('./routes/appliedJobs'));


const PORT =  5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});