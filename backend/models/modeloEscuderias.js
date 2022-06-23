const mongoose = require('mongoose');

const escuderiasSchema = new mongoose.Schema({
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
    pilotos:["piloto1", "piloto2"]
}
);


module.exports = mongoose.model('escuderias', escuderiasSchema);
