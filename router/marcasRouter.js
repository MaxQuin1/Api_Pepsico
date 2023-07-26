const express = require("express");
const marcasControllers = require("../controllers/marcasControllers");
const router = express.Router();

// ! Rutas para las marcas
router.get("/", marcasControllers.obtenerMarcas);
router.get("/:id_marca", marcasControllers.obtenerMarcasPorId);
router.post("/", marcasControllers.crearMarcas);
router.delete("/:id_marca", marcasControllers.eliminarMarcasPorId);
router.put("/:id_marca", marcasControllers.actualizarMarcasPorId);

module.exports = router;