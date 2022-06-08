const mongoose = require('mongoose');


// Funcion que nos conecta a  nuestra base de datos
const dbConect = ()=>{
    const uri2 = process.env.URI;
    mongoose.connect(uri2, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },(error)=>{
        if(!error) console.log('*** Conexión correcta a la base de datos ***');
        else console.log('¡Error de conexión a la base de datos!');
    });
}

module.exports = dbConect;