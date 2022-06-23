const express = require ('express');
const router = express.Router();
const modelController = require ('../controller/controladorUsuarios');
const checkOrigen = require ('../helpers/origen'); // Pendiente de revisar
const auth = require ('../middleware/autenticacion');

router.get ('/', auth, modelController.obtenerUsuarios);
router.post ('/singup', modelController.crearUsuario);
router.post("/login",  modelController.iniciarSesion);


module.exports = router;