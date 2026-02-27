const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    class: String,
    age: Number,
    gender: String,
    marks: {
        math: Number,
        english: Number,
        science: Number
    }
}, {timestamps: true})

const Student =  mongoose.model('Student', studentSchema)
module.exports = Student