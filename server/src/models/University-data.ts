const mongoose = require('mongoose');

const university_db = new mongoose.Schema({
    Name: { type: String, required: true, trim:true },
    email: { type: String, required: true, unique: true, trim: true },
    Requirements: {
        SAT_Score: {type: Number, trim: true},
        HEPercentage: {type: Number, trim: true},
        Olevel: {
            Mathematics: {type: String, null:true, trim:true},
            


        }
    }
}, { timestamps : true },  { collection: 'university-data' });

export const University = mongoose.model('universityData', university_db);