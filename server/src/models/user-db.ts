import mongoose from "mongoose";

const user_db = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshToken : {type: String }
}, { collection: 'user-data' });

export const model = mongoose.model('userData', user_db);


