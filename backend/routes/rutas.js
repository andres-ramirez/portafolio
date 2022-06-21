const express = require ('express');
const router= express.Router();
const modelController = require ('../controller/controller');

router.get("/", modelController.obtenerDatos);

module.exports = router;

