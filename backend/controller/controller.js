const model = require ('../models/model');
const modelEscuderias = require ('../models/model.escuderias');

exports.obtenerDatos = async (req, res) => {

    try {
        const data = await model.find();
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).res('Error en el get');        
    }

}

exports.obtenerDatosScuderias = async (req, res) => {

    try {
        const data = await modelEscuderias.find();
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).res('Error en el get');        
    }

}