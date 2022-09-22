const express = require ('express');
const router= express.Router();
const modelController = require ('../controller/controladorApi');

router.get("/", modelController.obtenerDatos);
router.get("/pilotos", modelController.obtenerPilotos);
router.get("/escuderias", modelController.obtenerEscuderias);
router.put("/editarpiloto/:id", modelController.editarPiloto);
router.put("/editarescuderia/:id", modelController.editarEscuderia);

module.exports = router;

