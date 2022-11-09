const express = require('express');

const route = require('./routes/api');

const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

//import DB
const db = require('./config/db');
//Connect to db
db.connect();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200
}));

//Routes init
route(app);

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening on port ${process.env.PORT || 5000}`);
});
