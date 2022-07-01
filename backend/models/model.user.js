const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({

    usuario: {
        type: String,
        required: true,
        unique: true,


    },
    pass: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
        default: "user"
    }


}, {
    timestamps: true
});

module.exports = mongoose.model('usuarios', apiSchema);