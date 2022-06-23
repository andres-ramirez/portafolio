const mongoose = require('mongoose');

const pilotosSchema = new mongoose.Schema({

    nombre: {
        type: String
    },
    nacimiento: {
        type: Date
    },
    pais: {
        type: String
    },
    campeonatos: { 
        type: Number
    },
    podios: {
        type: Number
    },
    victorias: {
        type: Number
    },
    poles: {
        type: Number
    },
    equipo: {
        type: String
    },
    numero_coche: {
        type: Number
    }
}
);


module.exports = mongoose.model('pilotos', pilotosSchema);