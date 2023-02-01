const mongoose = require('mongoose');


const user_db = new mongoose.Schema({
    firstName: { type: String, required: true, trim:true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true }
}, { timestamps : true},  { collection: 'user-data' });

export const User = mongoose.model('userData', user_db);


