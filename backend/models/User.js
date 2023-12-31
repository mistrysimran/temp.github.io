const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    password : {
        type: String,
        required: true
    },

    admin : {
        type: Boolean,
        required: true,
        default: false
    }
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;