const model = require ('../models/model');

exports.obtenerDatos = async (req, res) => {

    try {
        const data = await model.find();
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).res('Error en el get');        
    }

}