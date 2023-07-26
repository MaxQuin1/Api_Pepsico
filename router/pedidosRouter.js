const express = require("express");
const pedidosControllers = require("../controllers/pedidosControllers");

const router = express.Router();

// ! Rutas para los productos
router.get("/", pedidosControllers.obtenerPedidos);
router.get("/:id_pedido", pedidosControllers.obtenerPedidosPorId);
router.post("/", pedidosControllers.crearPedidos);
router.delete("/:id_pedido", pedidosControllers.eliminarPedidosPorId);
router.put("/:id_pedido", pedidosControllers.actualizarPedidosPorId);

module.exports = router;