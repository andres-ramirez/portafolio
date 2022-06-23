const express = require ("express");
const dbConect = require("./config/conexionDB");
const datosEscuderias = require ('./routes/rutasApi');
const datosUsers = require ('./routes/rutasUsuarios');
const dotenv = require ('dotenv');
const cors = require ('cors');

dotenv.config();

const app = express();
dbConect();

app.use(cors());
app.use(express.json());

app.use('/api-escuderias', datosEscuderias);
app.use('/usuarios', datosUsers);   


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("escuchando en el puerto " + port);
});
