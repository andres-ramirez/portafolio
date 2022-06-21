const express = require ("express");
const dbConect = require("./config/dbConect");
const datosEscuderias = require ('./routes/rutas');
const datosUsers = require ('./routes/rutas.user');
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
