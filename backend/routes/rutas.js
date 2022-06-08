const express = require ('express');
const router= express.Router();
const modelController = require ('../controller/controller');

router.get("/", modelController.obtenerDatos);
// router.get("/", modelController.obtenerDatosScuderias);

module.exports = router;

