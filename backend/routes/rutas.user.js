const express = require ('express');
const router = express.Router();
const modelController = require ('../controller/controller.user');
const checkOrigen = require ('../helpers/origen');
const auth = require ('../middleware/auth');

router.get ('/', auth, modelController.obtenerUsers);
router.post ('/singup', modelController.crearUser);
router.post("/login",  modelController.iniciarSesion);


module.exports = router;