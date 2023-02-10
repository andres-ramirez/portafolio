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

exports.editarPiloto = async (req, res) => {	

    try {

        const { id } = req.params;
        console.log(req.body);
        const { nombre, nacimiento, pais, campeonatos, podios, victorias, poles, equipo, numeroCoche } = req.body;

        let piloto = await modeloPilotos.findById(id);

        if (!piloto) {
            return res.status(404).json({                
                message: 'El piloto no existe'
            });
        }
        
        piloto.nombre = nombre;
        piloto.nacimiento = nacimiento;
        piloto.pais = pais;
        piloto.campeonatos = campeonatos;
        piloto.podios = podios;
        piloto.victorias = victorias;
        piloto.poles = poles;
        piloto.equipo = equipo;
        piloto.numero_coche = numeroCoche;
                

        piloto = await modeloPilotos.findByIdAndUpdate(id, piloto);
        res.json(piloto);

    } catch (error) {
        console.log(error);
        res.status(500).res('Error en la actualizacion');
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

exports.editarEscuderia = async (req, res) => {

    try {

        const {id}= req.params;
        const {nombre, jefe_equipo, sede, chasis, motor, campeonatos, poles, pilotos} = req.body;

        let escuderia = await modeloEscuderia.findById(id);

        if(!escuderia){
            return res.status(404).json({
                message: 'La escuderia no existe' 
            })
        }

        escuderia.nombre = nombre;
        escuderia.jefe_equipo = jefe_equipo;
        escuderia.sede= sede;
        escuderia.chasis = chasis;
        escuderia.motor = motor;
        escuderia.campeonatos = campeonatos;
        escuderia.poles = poles;
        escuderia.pilotos = pilotos;

        escuderia = await modeloEscuderia.findByIdAndUpdate(id, escuderia);
        res.json(escuderia);
        
    } catch (error) {
        console.log(error);
        console.log('Error en el put de las escuderias');
        res.status(500);        
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
    

