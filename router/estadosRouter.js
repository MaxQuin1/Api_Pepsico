const express = require("express");
const estadosControllers = require("../controllers/estadosControllers");
const router = express.Router();

// ! Rutas para las estados
router.get("/", estadosControllers.obtenerEstados);
router.get("/:id_estado", estadosControllers.obtenerEstadosPorId);
router.post("/", estadosControllers.crearEstados);
router.delete("/:id_estado", estadosControllers.eliminarEstadosPorId);
router.put("/:id_estado", estadosControllers.actualizarEstadosPorId);

module.exports = router;