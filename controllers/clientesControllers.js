const { json } = require("express");
const connection = require("../database");

// TODO: funciones para productos
const obtenerClientes = (req,res) => {
    connection.query("SELECT clientes.id_cliente AS id_cliente, clientes.nombre AS nombre, clientes.email AS email, clientes.contrasena AS contrasena, clientes.direccion AS direccion, estados.estado AS estado FROM clientes INNER JOIN estados ON clientes.id_estado = estados.id_estado;",(error,results) => {
        if (error){
            console.error("Error al obtener los clientes",error);
            res.status(500).json({
                error: "Error al obtener clientes",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerClientesPorId = (req,res) => {
    const id = req.params.id_cliente;

    connection.query('SELECT * FROM clientes WHERE id_cliente = ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener el cliente",error);
            res.status(500).json({error :"Ocurrio un error al obtener el cliente"});
        }else if(results.length === 0){
            res.status(500).json({error: "El cliente no fue encontrando"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearClientes = (req,res) => {
    const {nombre,email,contrasena,direccion,ciudad,estado,pais} = req.body;
    connection.query("INSERT INTO clientes (nombre, email, contrasena, direccion , ciudad, estado, pais) VALUES (?,?,?,?,?,?,?)",
    [nombre,email,contrasena,direccion,ciudad,estado,pais], (error,results) => {
        if (error){
            console.error("Error al agregar el cliente",error);
            res.status(500).json({error:"Error al agregar cliente"})
        }else{
        res.json({message: "Cliente agregado"});
        }
    })
}

const actualizarClientesPorId =(req,res) => {
    const id = req.params.id_cliente;
    const {nombre,email,contrasena,direccion,ciudad,estado,pais} = req.body;
    connection.query('UPDATE clientes SET nombre = ?, email = ?, contrasena = ?, direccion = ?, ciudad = ?, estado = ?, pais = ?  WHERE id_cliente = ?',
    [nombre,email,contrasena,direccion,ciudad,estado,pais,id],(error,results) => {
        console.error("Error al actualizar el cliente".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar el cliente"});
        }else{
            res.json({message:"El cliente fue actualizado correctamente"});
        }
    })
}

const eliminarClientesPorId = (req,res) => {
    const id = req.params.id_cliente;

    connection.query('DELETE FROM clientes WHERE id_cliente = ?',[id],(error,results) => {
        console.error("Error al eliminar el cliente".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al eliminar el cliente"});
        }else{
            res.json({message:"El cliente fue elimanado correctamente"});
        }
    });
}

module.exports = {
    obtenerClientes,
    obtenerClientesPorId,
    crearClientes,
    eliminarClientesPorId,
    actualizarClientesPorId,
};