const mongoose = require ('mongoose');

const apiSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    jefe_equipo: {
        type: String
    },
    sede: {
        type: String
    },
    chasis: {
        type: String
    },
    motor: {
        type: String
    },
    campeonatos: {
        type: Number
    },
    poles:{
        type: Number
    },
    pilotos:[
        {piloto1: {type: Number}}, {piloto2: {type: Number}}
     ]
});

module.exports = mongoose.model('escuderias', apiSchema);