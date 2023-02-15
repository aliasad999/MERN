const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const path = 'UniversityPortal'
const mongoUrl = `mongodb://127.0.0.1:27017/${path}`
mongoose.connect(mongoUrl);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database connection established successfully");
})

app.listen(port, () => {
    console.log(`> Listening on port ${port}`);
})