const express = require ("express");
const dbConect = require("./config/dbConect");
const datos = require ('./routes/rutas');
const dotenv = require ('dotenv');
const cors = require ('cors');

dotenv.config();

const app = express();
dbConect();

app.use(cors());
app.use(express.json());

app.use('/api-escuderias', datos);


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("escuchando en el puerto" + port);
});
