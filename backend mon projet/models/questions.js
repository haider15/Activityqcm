const mongoose = require('mongoose');
const questionsShema = new mongoose.Schema({
    questions: {
        type: String,
        required: true
    },
    isUnique: {
        type: Boolean,
        required: true
    },
    istrue: {
        type: String,
        required: true
    },


    language: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'language'
    }


});

mongoose.model('questions', questionsShema);
