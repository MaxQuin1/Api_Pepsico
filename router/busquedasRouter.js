const express = require("express");
const buscadoresControllers = require("../controllers/buscadoresControllers");

const router = express.Router();

// ! Rutas para las estados
router.get("/marcas/:nombre", buscadoresControllers.obtenerProductosPorMarcas);
router.get("/nombre/:nombre", buscadoresControllers.obtenerProductosPorNombre);
router.get("/descripcion/:descripcion", buscadoresControllers.obtenerProductosPorDescripcion);

module.exports = router;