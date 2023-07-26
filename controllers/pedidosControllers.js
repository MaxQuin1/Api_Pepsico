const { json } = require("express");
const connection = require("../database");

// TODO: funciones para pedidos
const obtenerPedidos = (req,res) => {
    connection.query("SELECT pedidos.id_pedido AS id_pedido, clientes.nombre AS nombre_cliente, pedidos.fecha AS fecha, pedidos.total AS total FROM pedidos INNER JOIN clientes ON pedidos.id_cliente = clientes.id_cliente;",(error,results) => {
        if (error){
            console.error("Error al obtener los pedidos",error);
            res.status(500).json({
                error: "Error al obtener pedidos",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerPedidosPorId = (req,res) => {
    const id = req.params.id_pedido;

    connection.query('SELECT * FROM pedidos WHERE id_pedido = ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener el cliente",error);
            res.status(500).json({error :"Ocurrio un error al obtener el pedido"});
        }else if(results.length === 0){
            res.status(500).json({error: "El pedido no fue encontrando"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearPedidos = (req,res) => {
    const {id_cliente,total} = req.body;
    connection.query("INSERT INTO pedidos (id_cliente, total) VALUES (?,?)",
    [id_cliente,total], (error,results) => {
        if (error){
            console.error("Error al agregar el pedido",error);
            res.status(500).json({error:"Error al agregar pedido"})
        }else{
        res.json({message: "Pedido agregado"});
        }
    })
}

const actualizarPedidosPorId =(req,res) => {
    const id = req.params.id_pedido;
    const {id_cliente,total} = req.body;
    connection.query('UPDATE pedidos SET id_cliente = ?, total = ?  WHERE id_pedido = ?',
    [id_cliente,total,id],(error,results) => {
        console.error("Error al actualizar el pedido".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar el pedido"});
        }else{
            res.json({message:"El pedido fue actualizado correctamente"});
        }
    })
}

const eliminarPedidosPorId = (req,res) => {
    const id = req.params.id_pedido;

    connection.query('DELETE FROM pedidos WHERE id_pedido = ?',[id],(error,results) => {
        console.error("Error al eliminar el pedido".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al eliminar el pedido"});
        }else{
            res.json({message:"El pedido fue elimanado correctamente"});
        }
    });
}

module.exports = {
    obtenerPedidos,
    obtenerPedidosPorId,
    crearPedidos,
    actualizarPedidosPorId,
    eliminarPedidosPorId,
};