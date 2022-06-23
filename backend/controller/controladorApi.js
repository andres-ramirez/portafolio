const model = require ('../models/modeloApi');
const modeloEscuderia = require ('../models/modeloEscuderias');
const modeloPilotos = require ('../models/modeloPilotos');


exports.obtenerPilotos = async (req, res) => {
    
        try {
            const data = await modeloPilotos.find();
            res.json(data);
            
        } catch (error) {
            console.log(error);
            res.status(500).res('Error en el get');        
        }
    
}

exports.obtenerEscuderias = async (req, res) => {

    try {
        const data = await modeloEscuderia.find();
        res.json(data);

    } catch (error) {
        console.log(error);
        res.status(500).res('Error en el get');
    }

    }
    


exports.obtenerDatos = async (req, res) => {

    try {
        const data = await model.find();
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).res('Error en el get');        
    }

}



    
    
exports.editarEscuderia = async (req, res) => {
        
            try {
                const data = await model.findByIdAndUpdate(req.params.id, req.body, {new: true});
                res.json(data);
                
            } catch (error) {
                console.log(error);
                res.status(500).res('Error en el get');        
            }
        
        }
