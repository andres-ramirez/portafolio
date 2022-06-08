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
    pilotos: {
        piloto1:{
            edad: {
                type: Number
            },
            pais : {
                type: String
            },
            campeonatos: {
                type: Number
            },
            equipo: {
                type: String
            },
            numero_coche: {
                type: Number
            }
        },
        piloto2:{
            edad: {
                type: Number
            },
            pais : {
                type: String
            },
            campeonatos: {
                type: Number
            },
            equipo: {
                type: String
            },
            numero_coche: {
                type: Number
            }
        }

    }

});

module.exports = mongoose.model('escuderias_pilotos', apiSchema);

